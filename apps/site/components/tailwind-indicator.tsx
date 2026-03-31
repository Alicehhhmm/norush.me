'use client';

/**
 * 屏幕尺寸指示器：用于在开发环境中显示当前的屏幕尺寸（如 xs、sm、md、lg、xl、2xl）。
 * 在生产环境中，该组件不会渲染任何内容。
 */
export const TailwindIndicator = () => {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const handleHide = () => {
    const element = document.querySelector('.tailwind-indicator');
    if (element) {
      element.classList.add('hidden');
    }
  };

  return (
    <div
      className={`tailwind-indicator fixed bottom-4 left-4 z-50 flex cursor-default items-center gap-2 rounded-full border border-gray-600 bg-gray-800 px-3 py-1.5 font-mono text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-500 dark:bg-gray-900 dark:text-gray-100`}
    >
      <div className="flex items-center">
        <span className="inline sm:hidden">xs</span>
        <span className="hidden sm:inline md:hidden">sm</span>
        <span className="hidden md:inline lg:hidden">md</span>
        <span className="hidden lg:inline xl:hidden">lg</span>
        <span className="hidden xl:inline 2xl:hidden">xl</span>
        <span className="hidden 2xl:inline">2xl</span>
      </div>

      <button
        onClick={e => {
          e.stopPropagation();
          handleHide();
        }}
        className="-mr-1.5 ml-1 rounded-full p-1 transition-colors hover:bg-gray-700 dark:hover:bg-gray-700"
        aria-label="Close screen size indicator"
      >
        <svg
          className="h-3 w-3 text-current"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};
