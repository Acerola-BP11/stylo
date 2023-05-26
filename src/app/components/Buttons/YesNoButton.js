export default function YesNoButton() {
  const handleYesConfirm = (e) => {
    console.log('sim');
  }

  const handleNoConfirm = (e) => {
    console.log('não');
  }

  return (
    <div className="flex flex-row items-center justify-between text-center text-white">
      <button type="submit" className="bg-green-400 px-5 py-3" onClick={handleYesConfirm}>Sim</button>
      <button type="button" className="bg-red-400 px-5 py-3" onClick={handleNoConfirm}>Não</button>
    </div>
  )
}