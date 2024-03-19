import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/types/supabase'
import AccountForm from '@/component/AccountForm'
import { useContext } from 'react'
import { UserDataContext } from '@/provider/SupabaseDataProvider'


export default async function Account() {
  const supabase = createServerComponentClient({cookies})
  const user  = (await supabase.auth.getUser()).data.user
  return <AccountForm user={user} />
}