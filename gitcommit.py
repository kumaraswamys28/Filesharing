import time
import os
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import subprocess
from datetime import datetime

class GitAutoHandler(FileSystemEventHandler):
    def __init__(self):
        self.commit_counter = 1
        self.last_commit_time = 0
        self.cooldown_seconds = 5  # Increased cooldown to avoid too frequent commits
    
    def on_modified(self, event):
        # Ignore directory events to avoid multiple triggers
        if event.is_directory:
            return
            
        current_time = time.time()
        # Check if cooldown period has elapsed
        if current_time - self.last_commit_time < self.cooldown_seconds:
            return
            
        self.last_commit_time = current_time
        self.process_git_changes()
        
    def process_git_changes(self):
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"\n[{timestamp}] Changes detected! Processing git operations...")
        
        try:
            # Add all changes
            subprocess.run(['git', 'add', '.'], check=True)
            print("Files staged successfully")
            
            # Commit with a counter
            commit_msg = f"Auto commit #{self.commit_counter} - {timestamp}"
            subprocess.run(['git', 'commit', '-m', commit_msg], check=True)
            print(f"Changes committed: {commit_msg}")
            
            # Push to remote
            subprocess.run(['git', 'push'], check=True)
            print("Changes pushed to remote repository")
            
            self.commit_counter += 1
            print(f"[{timestamp}] Git operations completed successfully!")
            
        except subprocess.CalledProcessError as e:
            print(f"[{timestamp}] Git operation failed: {e}")
        except Exception as e:
            print(f"[{timestamp}] Error: {str(e)}")

def main():
    # Get the directory path from user or use default
    watch_path = input("Enter directory to monitor (press Enter for current directory): ").strip()
    if not watch_path:
        watch_path = os.getcwd()
    
    # Change to the watch directory
    os.chdir(watch_path)
    
    # Set up and start the file system observer
    event_handler = GitAutoHandler()
    observer = Observer()
    observer.schedule(event_handler, ".", recursive=True)
    observer.start()
    
    print(f"\nMonitoring directory: {watch_path}")
    print("Press Ctrl+C to stop monitoring")
    
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
        print("\nMonitoring stopped")
    
    observer.join()

if __name__ == "__main__":
    main()
