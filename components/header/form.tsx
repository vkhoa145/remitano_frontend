export default function Form() {
  return (
    <div className="flex justify-end">
      <form>
        <input placeholder="email" className="bg-slate-200 rounded border-slate-900 border-2 w-48 mr-4 h-8 placeholder:pl-2"/>
        <input placeholder="password" className="bg-slate-200 rounded border-slate-900 border-2 w-48 mr-4 h-8 placeholder:pl-2"/>
        <input type="submit" value="Login/Register" className="bg-slate-400 rounded border-slate-900 border-2 w-48 cursor-pointer h-8"/>
      </form>
    </div>
  )
}