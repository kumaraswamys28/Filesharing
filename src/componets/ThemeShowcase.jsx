export default function ThemeShowcase() {
  return (<>
    <div className="min-h-screen bg-primary text-primary p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-brand mb-2">Theme Showcase</h1>
          <p className="text-secondary text-lg">Complete demonstration of custom theme system</p>
        </header>

        {/* Background Variations */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary mb-4">Background Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-primary border border-primary rounded-lg p-4">
              <h3 className="font-medium text-primary mb-2">Primary</h3>
              <p className="text-secondary text-sm">Main background color</p>
            </div>
            <div className="bg-secondary border border-primary rounded-lg p-4">
              <h3 className="font-medium text-primary mb-2">Secondary</h3>
              <p className="text-secondary text-sm">Card backgrounds</p>
            </div>
            <div className="bg-tertiary border border-primary rounded-lg p-4">
              <h3 className="font-medium text-primary mb-2">Tertiary</h3>
              <p className="text-secondary text-sm">Subtle emphasis</p>
            </div>
            <div className="bg-accent border border-primary rounded-lg p-4">
              <h3 className="font-medium text-primary mb-2">Accent</h3>
              <p className="text-secondary text-sm">Special highlights</p>
            </div>
          </div>
        </section>

        {/* Text Hierarchy */}
        <section className="bg-secondary rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-primary mb-4">Text Hierarchy</h2>
          <div className="space-y-3">
            <p className="text-primary text-xl font-semibold">Primary Text - Headlines and important content</p>
            <p className="text-secondary text-lg">Secondary Text - Body text and descriptions</p>
            <p className="text-tertiary">Tertiary Text - Captions and less important information</p>
            <p className="text-accent font-medium">Accent Text - Links and special emphasis</p>
          </div>
        </section>

        {/* Brand Colors */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary mb-4">Brand Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-brand text-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Primary Brand</h3>
              <p className="opacity-90">Main brand color for buttons and CTAs</p>
            </div>
            <div className="bg-brand-secondary text-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Secondary Brand</h3>
              <p className="opacity-90">Purple accent for variety</p>
            </div>
            <div className="bg-brand-accent text-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Brand Accent</h3>
              <p className="opacity-90">Pink highlight for special elements</p>
            </div>
          </div>
        </section>

        {/* Status Colors */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary mb-4">Status Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-success text-white rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">✓</div>
              <h3 className="font-semibold">Success</h3>
              <p className="text-sm opacity-90">Completed actions</p>
            </div>
            <div className="bg-warning text-white rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">⚠</div>
              <h3 className="font-semibold">Warning</h3>
              <p className="text-sm opacity-90">Attention needed</p>
            </div>
            <div className="bg-error text-white rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">✕</div>
              <h3 className="font-semibold">Error</h3>
              <p className="text-sm opacity-90">Failed actions</p>
            </div>
            <div className="bg-info text-white rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">ℹ</div>
              <h3 className="font-semibold">Info</h3>
              <p className="text-sm opacity-90">General information</p>
            </div>
          </div>
        </section>

        {/* Interactive Elements */}
        <section className="bg-secondary rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">Interactive Elements</h2>
          
          {/* Buttons */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-primary">Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <button className="bg-brand text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                Primary Button
              </button>
              <button className="bg-brand-secondary text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                Secondary Button
              </button>
              <button className="border border-brand text-brand px-4 py-2 rounded-md hover:bg-brand hover:text-white transition-colors">
                Outline Button
              </button>
              <button className="text-brand hover:text-brand-secondary px-4 py-2 rounded-md hover-bg transition-colors">
                Text Button
              </button>
            </div>
          </div>

          {/* Form Elements */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-primary">Form Elements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-secondary text-sm font-medium mb-2">
                  Text Input
                </label>
                <input 
                  type="text" 
                  placeholder="Enter some text..."
                  className="w-full px-3 py-2 border border-primary rounded-md bg-primary text-primary focus-ring focus:border-brand"
                />
              </div>
              <div>
                <label className="block text-secondary text-sm font-medium mb-2">
                  Select Dropdown
                </label>
                <select className="w-full px-3 py-2 border border-primary rounded-md bg-primary text-primary focus-ring focus:border-brand">
                  <option>Choose an option</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Cards with Shadows */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary mb-4">Cards & Shadows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-secondary rounded-lg p-4 shadow-themed-sm">
              <h3 className="font-semibold text-primary mb-2">Small Shadow</h3>
              <p className="text-secondary text-sm">Subtle elevation for list items</p>
            </div>
            <div className="bg-secondary rounded-lg p-4 shadow-themed-md">
              <h3 className="font-semibold text-primary mb-2">Medium Shadow</h3>
              <p className="text-secondary text-sm">Standard card elevation</p>
            </div>
            <div className="bg-secondary rounded-lg p-4 shadow-themed-lg">
              <h3 className="font-semibold text-primary mb-2">Large Shadow</h3>
              <p className="text-secondary text-sm">Prominent card elevation</p>
            </div>
            <div className="bg-secondary rounded-lg p-4 shadow-themed-xl">
              <h3 className="font-semibold text-primary mb-2">XL Shadow</h3>
              <p className="text-secondary text-sm">Maximum elevation for modals</p>
            </div>
          </div>
        </section>

        {/* Navigation Example */}
        <section className="bg-secondary rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">Navigation Example</h2>
          <nav className="bg-tertiary rounded-lg p-4">
            <div className="flex flex-wrap gap-1">
              <a href="#" className="px-3 py-2 rounded-md bg-brand text-white">Home</a>
              <a href="#" className="px-3 py-2 rounded-md text-secondary hover-bg hover:text-primary transition-colors">About</a>
              <a href="#" className="px-3 py-2 rounded-md text-secondary hover-bg hover:text-primary transition-colors">Services</a>
              <a href="#" className="px-3 py-2 rounded-md text-secondary hover-bg hover:text-primary transition-colors">Contact</a>
            </div>
          </nav>
        </section>

        {/* Badges and Tags */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary mb-4">Badges & Tags</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-brand text-white px-3 py-1 rounded-full text-sm font-medium">Primary</span>
            <span className="bg-success text-white px-3 py-1 rounded-full text-sm font-medium">Success</span>
            <span className="bg-warning text-white px-3 py-1 rounded-full text-sm font-medium">Warning</span>
            <span className="bg-error text-white px-3 py-1 rounded-full text-sm font-medium">Error</span>
            <span className="border border-brand text-brand px-3 py-1 rounded-full text-sm font-medium">Outline</span>
            <span className="bg-tertiary text-primary px-3 py-1 rounded-full text-sm font-medium">Neutral</span>
          </div>
        </section>

        {/* Alert Examples */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary mb-4">Alert Examples</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-success bg-success bg-opacity-10 p-4 rounded-r-md">
              <div className="flex">
                <div className="text-success mr-3">✓</div>
                <div>
                  <h4 className="text-success font-medium">Success!</h4>
                  <p className="text-secondary text-sm mt-1">Your changes have been saved successfully.</p>
                </div>
              </div>
            </div>
            <div className="border-l-4 border-warning bg-warning bg-opacity-10 p-4 rounded-r-md">
              <div className="flex">
                <div className="text-warning mr-3">⚠</div>
                <div>
                  <h4 className="text-warning font-medium">Warning</h4>
                  <p className="text-secondary text-sm mt-1">Please review your information before proceeding.</p>
                </div>
              </div>
            </div>
            <div className="border-l-4 border-error bg-error bg-opacity-10 p-4 rounded-r-md">
              <div className="flex">
                <div className="text-error mr-3">✕</div>
                <div>
                  <h4 className="text-error font-medium">Error</h4>
                  <p className="text-secondary text-sm mt-1">There was a problem processing your request.</p>
                </div>
              </div>
            </div>
            <div className="border-l-4 border-info bg-info bg-opacity-10 p-4 rounded-r-md">
              <div className="flex">
                <div className="text-info mr-3">ℹ</div>
                <div>
                  <h4 className="text-info font-medium">Information</h4>
                  <p className="text-secondary text-sm mt-1">This feature is currently in beta testing.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-tertiary rounded-lg p-6 text-center">
          <p className="text-secondary">
            Theme showcase demonstrating all custom color utilities and components
          </p>
          <p className="text-tertiary text-sm mt-2">
            Toggle between light and dark themes to see the full effect
          </p>
        </footer>

      </div>
    </div></>
  );
}