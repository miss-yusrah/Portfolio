import { useState, useRef, useEffect } from 'react'

const Contact = () => {
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState<string | null>(null)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState<string | null>(null)
    const [message, setMessage] = useState('')
    const [sending, setSending] = useState(false)
    const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error', text?: string }>({ type: 'idle' })
    const honeypotRef = useRef<HTMLInputElement | null>(null)

    const validate = () => {
        if (!name || name.trim().length === 0) {
            setNameError('Please provide your name.')
            setStatus({ type: 'error', text: 'Please provide your name.' })
            return false
        }
        setNameError(null)

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError('Please provide a valid email.')
            setStatus({ type: 'error', text: 'Please provide a valid email.' })
            return false
        }
        if (!message || message.trim().length < 10) {
            setStatus({ type: 'error', text: 'Please write a longer message (10+ characters).' })
            return false
        }
        setEmailError(null)
        return true
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus({ type: 'idle' })

        // honeypot check
        if (honeypotRef.current?.value) {
            setStatus({ type: 'error', text: 'Spam detected' })
            return
        }

        if (!validate()) return

        // Using mailto: to open user's email client.
        const to = 'mohammedyusi6@gmail.com'
        const subject = encodeURIComponent(`Portfolio contact from ${name || 'Visitor'} <${email}>`)
        const body = encodeURIComponent(`Name: ${name || '—'}\nEmail: ${email}\n\n${message}`)

        try {
            setSending(true)
            // Open default mail client with prefilled subject and body
            window.location.href = `mailto:${to}?subject=${subject}&body=${body}`

            setStatus({ type: 'success', text: 'Email client opened, please send the message from your mail app.' })
            setName('')
            setEmail('')
            setMessage('')
        } catch (err: any) {
            console.error(err)
            setStatus({ type: 'error', text: 'Unable to open email client.' })
        } finally {
            // re-enable button shortly after
            setTimeout(() => setSending(false), 600)
        }
    }

    // clear success and error messages after 2s
    useEffect(() => {
        if (status.type === 'error' || status.type === 'success') {
            const t = setTimeout(() => setStatus({ type: 'idle' }), 2000)
            return () => clearTimeout(t)
        }
        return
    }, [status.type])

    // clear inline email error after 2s
    useEffect(() => {
        if (emailError) {
            const t = setTimeout(() => setEmailError(null), 2000)
            return () => clearTimeout(t)
        }
        return
    }, [emailError])

    // clear inline name error after 2s
    useEffect(() => {
        if (nameError) {
            const t = setTimeout(() => setNameError(null), 2000)
            return () => clearTimeout(t)
        }
        return
    }, [nameError])

    return (
        <section className="bg-[#F5F3EB] text-[#191919] py-20 px-6 md:px-16 min-h-screen -mt-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
                <div className="w-24 h-1 bg-[#191919] mx-auto mb-8"></div>

                <p className="text-center text-[#191919]/80 mb-8">Have a question or want to work together? Feel free to reach out. I typically reply within 1–2 business days.</p>

                <form onSubmit={onSubmit} className="space-y-6" noValidate>
                    <input ref={honeypotRef} name="hp" type="text" className="hidden" aria-hidden />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="flex flex-col">
                            <span className="font-medium mb-2">Name</span>
                            <input
                                value={name}
                                onChange={(e) => {
                                    const v = e.target.value
                                    setName(v)
                                    // clear status and name error when user starts typing
                                    if (status.type !== 'idle') setStatus({ type: 'idle' })
                                    if (nameError) setNameError(null)
                                }}
                                className="p-3 rounded-md bg-[#ffffff0f] border border-[#0A192F]/20"
                                placeholder="Your name"
                            />
                            {nameError && <p className="text-sm text-red-600 mt-2">{nameError}</p>}
                        </label>

                        <label className="flex flex-col">
                            <span className="font-medium mb-2">Email</span>
                            <input
                                value={email}
                                onChange={(e) => {
                                    const v = e.target.value
                                    setEmail(v)
                                    // live validation
                                    if (!v || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
                                        setEmailError('Please provide a valid email.')
                                    } else {
                                        setEmailError(null)
                                    }
                                    if (status.type !== 'idle') setStatus({ type: 'idle' })
                                }}
                                className="p-3 rounded-md bg-[#ffffff0f] border border-[#0A192F]/20"
                                placeholder="your.email@example.com"
                                required
                            />
                            {emailError && <p className="text-sm text-red-600 mt-2">{emailError}</p>}
                        </label>
                    </div>

                    <label className="flex flex-col">
                        <span className="font-medium mb-2">Message</span>
                        <textarea
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value)
                                if (status.type !== 'idle') setStatus({ type: 'idle' })
                            }}
                            className="p-4 rounded-md bg-[#ffffff0f] border border-[#0A192F]/20 min-h-[160px] resize-none"
                            placeholder="Your message here..."
                            required
                        />
                    </label>

                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <button
                            type="submit"
                            disabled={sending}
                            className="w-full md:w-auto bg-[#191919] text-white font-semibold py-3 px-8 rounded-md disabled:opacity-60"
                        >
                            {sending ? 'Sending…' : 'Send Message'}
                        </button>

                        <div aria-live="polite" className="mt-2 md:mt-0">
                            {status.type === 'success' && (
                                <p className="text-green-600">{status.text}</p>
                            )}
                            {status.type === 'error' && (
                                <p className="text-red-600">{status.text}</p>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact

