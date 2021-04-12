import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>My name is Josoyoun.</h1>
      <p>My hobby is dancing.</p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}