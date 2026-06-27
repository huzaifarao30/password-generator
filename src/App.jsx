import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(12)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (includeNumbers) {
      characters += '0123456789'
    }

    if (includeSymbols) {
      characters += '!@#$%^&*-_+=[]{}~`'
    }

    let nextPassword = ''

    for (let index = 0; index < length; index += 1) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      nextPassword += characters.charAt(randomIndex)
    }

    setPassword(nextPassword)
  }, [includeNumbers, includeSymbols, length])

  const copyPasswordToClipboard = useCallback(async () => {
    if (passwordRef.current) {
      passwordRef.current.select()
      passwordRef.current.setSelectionRange(0, 999)
    }

    await window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [generatePassword])

  return (
    <main className="app-shell">
      <section className="generator-card">
        <p className="eyebrow">Secure random generator</p>
        <h1>Password Generator</h1>
        <p className="subtitle">
          Create a quick password with the length and characters you want.
        </p>

        <div className="password-row">
          <input
            ref={passwordRef}
            type="text"
            value={password}
            readOnly
            placeholder="Your password appears here"
          />
          <button type="button" onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>

        <div className="controls">
          <label className="control control-range">
            <span>Length: {length}</span>
            <input
              type="range"
              min="6"
              max="32"
              value={length}
              onChange={(event) => setLength(Number(event.target.value))}
            />
          </label>

          <label className="control control-check">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers((previous) => !previous)}
            />
            <span>Include numbers</span>
          </label>

          <label className="control control-check">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols((previous) => !previous)}
            />
            <span>Include symbols</span>
          </label>
        </div>
      </section>
    </main>
  )
}

export default App
