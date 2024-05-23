'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utlis/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/auth/signin?message=' + encodeURIComponent('Login failed: ' + error.message) + '&type=error');
  }
  else{
    revalidatePath('/dashboard', 'layout')
    return redirect('/dashboard?message=' + encodeURIComponent('Login Successful') + '&type=success');
  }
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/auth/signup?message=' + encodeURIComponent('Signup Failed: ' + error.message) + '&type=error');
  }

    revalidatePath('/', 'layout')
    redirect(`/auth/notification?message=${encodeURIComponent('Successfully signed up! Please check your email to confirm your account.')}&type=success`)
}