"use client"
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/types/supabase'
import AccountForm from '@/component/AccountForm'


export default function Account() {
  
  return <AccountForm user={user} />
}