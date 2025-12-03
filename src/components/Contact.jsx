import React, {useState} from 'react'
import { motion } from 'framer-motion'

// Contact form ready to submit to Formspree. Set VITE_FORMSPREE_ENDPOINT in .env
export default function Contact(){
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

  function validate(){
    if(!form.name || !form.email || !form.message) return 'Tous les champs sont requis.'
    const re = /\S+@\S+\.\S+/
    if(!re.test(form.email)) return 'Email invalide.'
    return ''
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setError('')
    setSuccess('')
    const v = validate()
    if(v){ setError(v); return }
    setLoading(true)

    const endpoint = FORMSPREE_ENDPOINT
    try{
      if(endpoint){
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
        })
        if(res.ok){
          setSuccess('Message envoyé — merci !')
          setForm({name:'', email:'', message:''})
        } else {
          setError('Une erreur est survenue lors de l envoi.')
        }
      } else {
        // Fallback: open mail client
        window.location.href = `mailto:your@email.com?subject=${encodeURIComponent('Contact via portfolio')}&body=${encodeURIComponent(form.message + '\n\n--\n' + form.name + ' - ' + form.email)}`
      }
    }catch(err){
      console.error(err)
      setError('Impossible d envoyer le message. Vérifiez votre connexion.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} viewport={{once:true}}>
          <h3 className="text-3xl sm:text-4xl font-bold mb-2 accent">Prenons Contact</h3>
          <p className="text-muted mb-8">Envoyez-moi un message et je vous répondrai dès que possible.</p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="grid gap-4"
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6, delay:0.1}}
          viewport={{once:true}}
        >
          {/* Futuristic input fields with glow effect */}
          <div className="relative group">
            <input 
              className="p-4 rounded-lg bg-white/3 border border-[var(--color-primary)]/20 group-focus-within:border-[var(--color-primary)]/60 w-full text-sm sm:text-base touch-manipulation transition-all duration-300 placeholder-neutral-400 text-black focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]/30" 
              placeholder="Votre nom" 
              value={form.name} 
              onChange={e=>setForm({...form, name:e.target.value})} 
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--color-primary)]/0 via-[var(--color-primary)]/5 to-[var(--color-primary)]/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          <div className="relative group">
            <input 
              className="p-4 rounded-lg bg-white/3 border border-[var(--color-primary)]/20 group-focus-within:border-[var(--color-primary)]/60 w-full text-sm sm:text-base touch-manipulation transition-all duration-300 placeholder-neutral-400 text-black focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]/30" 
              placeholder="Votre email" 
              type="email"
              value={form.email} 
              onChange={e=>setForm({...form, email:e.target.value})} 
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--color-primary)]/0 via-[var(--color-primary)]/5 to-[var(--color-primary)]/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          <div className="relative group">
            <textarea 
              className="p-4 rounded-lg bg-white/3 border border-[var(--color-primary)]/20 group-focus-within:border-[var(--color-primary)]/60 w-full text-sm sm:text-base touch-manipulation transition-all duration-300 placeholder-neutral-400 text-black focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]/30 resize-none" 
              placeholder="Votre message" 
              rows={5} 
              value={form.message} 
              onChange={e=>setForm({...form, message:e.target.value})} 
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--color-primary)]/0 via-[var(--color-primary)]/5 to-[var(--color-primary)]/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          {error && <motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-sm text-rose-400 px-4 py-2 rounded-lg bg-rose-400/10 border border-rose-400/20">{error}</motion.div>}
          {success && <motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-sm text-green-400 px-4 py-2 rounded-lg bg-green-400/10 border border-green-400/20">{success}</motion.div>}

          <motion.button 
            type="submit" 
            disabled={loading}
            whileHover={{scale: 1.02}}
            whileTap={{scale:0.98}}
            className="mt-4 px-6 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-medium text-sm sm:text-base transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[var(--color-primary)]/20"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="inline-block w-4 h-4 border-2 border-transparent border-t-white rounded-full animate-spin" />
                Envoi en cours...
              </span>
            ) : (
              'Envoyer le message'
            )}
          </motion.button>
        </motion.form>

        {!FORMSPREE_ENDPOINT && (
          <motion.div
            className="text-sm text-amber-200 mt-6 px-4 py-3 rounded-lg bg-amber-800/10 border border-amber-700/20"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6, delay:0.2}}
            viewport={{once:true}}
          >
            <strong>Formspree non configuré :</strong> pour activer l'envoi depuis le site, créez un compte sur <a href="https://formspree.io/" className="underline">Formspree</a>, copiez l'endpoint et ajoutez <code>VITE_FORMSPREE_ENDPOINT</code> dans un fichier <code>.env</code> à la racine du projet. Redémarrez le serveur de dev après l'ajout.
          </motion.div>
        )}

        {/* When endpoint exists we skip showing extra status message */}
      </div>
    </section>
  )
}
