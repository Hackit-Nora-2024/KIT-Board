import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/types/supabase'
import AccountForm from '@/component/AccountForm'
import useUserData from '@/hooks/useUserData'

export const dynamic = 'force-dynamic'

export default async function Account() {
  const user = useUserData()
  return <AccountForm user={user} />
}