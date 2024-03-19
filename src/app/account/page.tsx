"use client"
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/types/supabase'
import AccountForm from '@/component/AccountForm'
import { useContext } from 'react'
import { UserDataContext } from '@/provider/SupabaseDataProvider'


export default function Account() {
  const user = useContext(UserDataContext)  
  return <AccountForm user={user} />
}