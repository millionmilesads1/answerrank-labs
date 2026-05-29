'use server'

export type LeadState = {
  status: 'idle' | 'success' | 'error'
  whatsappUrl?: string
  error?: string
}

export async function submitLead(prevState: LeadState, formData: FormData): Promise<LeadState> {
  const name = (formData.get('name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const company = (formData.get('company') as string)?.trim()
  const challenge = (formData.get('challenge') as string)?.trim()

  if (!name || !email || !company) {
    return { status: 'error', error: 'Please fill in all required fields.' }
  }

  if (!email.includes('@') || !email.includes('.')) {
    return { status: 'error', error: 'Please enter a valid email address.' }
  }

  const challengeLabel: Record<string, string> = {
    invisible: 'My brand is invisible in AI answers',
    competitor: 'Competitor dominates AI search results',
    understand: 'I want to understand GEO for my business',
    strategy: 'I need a full AI search strategy',
  }

  const challengeText = challengeLabel[challenge] ?? challenge ?? 'Not specified'

  const message = encodeURIComponent(
    `Hi Answer Rank Labs! 👋\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Company: ${company}\n` +
    `Challenge: ${challengeText}\n\n` +
    `I'd like to learn more about your GEO services and get my free AI Search Audit.`
  )

  return {
    status: 'success',
    whatsappUrl: `https://wa.me/918796394750?text=${message}`,
  }
}
