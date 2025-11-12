export default function ChatHeader() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-6 shadow-lg">
      <div className="max-w-5xl mx-auto flex items-center gap-3">
        <div className="bg-white p-2 rounded-xl">
          <img
            src="/image.png"
            alt="Toyota Logo"
            className="w-12 h-12 object-contain"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">LeaseEase</h1>
          <p className="text-red-100 text-sm">Let's go places.</p>
        </div>
      </div>
    </div>
  );
}
