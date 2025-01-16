export default function AnnouncementBar() {
  return (
    <div className="bg-black p-4">
      <p className="text-center text-sm font-medium text-white">
        This a portfolio website by{' '}
        <a
          href="https://www.roberthawker.dev"
          target="_blank"
          className="font-semibold underline" rel="noreferrer"
        >
          Robert Hawker
        </a>
      </p>
    </div>
  );
}
