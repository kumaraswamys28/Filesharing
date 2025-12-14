import Textarea from "./Textarea";

const Sharebin = ({socketRef,onCodeChange,roomId}) => {


  return (
    <div className="flex-1 bg-primary">
      <div className="p-6 h-full flex flex-col gap-6">
        <Textarea roomId={roomId} onCodeChange={onCodeChange} socketRef={socketRef}/>

       
      </div>
    </div>
  );
};

export default Sharebin;
