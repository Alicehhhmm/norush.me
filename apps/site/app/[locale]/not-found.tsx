import Link from 'next/link';

// TODO: Add a custom 404 page with a link back to the homepage
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Homex</Link>
    </div>
  );
}
