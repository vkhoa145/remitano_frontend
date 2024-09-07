'use client'
import { authenticate } from "@/services/authService";
import { useState } from "react"

export default function Form({ onLogin }: { onLogin: () => void}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthenticate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await authenticate(email, password);
      onLogin()
    } catch (error) {
      console.log('error', error)
    }
  }
  return (
    <div className="flex justify-end">
      <form>
        <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-slate-200 rounded border-slate-900 border-2 w-48 mr-4 h-8 placeholder:pl-2"/>
        <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-slate-200 rounded border-slate-900 border-2 w-48 mr-4 h-8 placeholder:pl-2"/>
        <button onClick={handleAuthenticate} className="bg-slate-400 rounded border-slate-900 border-2 w-48 cursor-pointer h-8">Login/Register</button>
      </form>
    </div>
  )
}