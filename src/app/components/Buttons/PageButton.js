export default function PageButton({
  page
}) {
  return (
    <button className="flex items-center justify-center text-center font-bold w-8 h-8 mx-1 hover:bg-blue-100 checked:bg-blue-400" value={page}>
      {page}
    </button>
  )
}