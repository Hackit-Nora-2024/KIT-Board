'use client'
import { useCallback, useEffect, useState } from 'react'
import { Database } from '@/types/supabase'
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button, Input, Label } from '@yamada-ui/react'

export default function AccountForm({ user }: { user: User | null }) {
  /* const supabase = createClientComponentClient<Database>()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [website, setWebsite] = useState<string | null>(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null) */

  /* const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website, avatar_url`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string | null
    fullname: string | null
    website: string | null
    avatar_url: string | null
  }) {
    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  } */

  return (
    <div className="form-widget">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="text" value={user?.email} disabled />
      </div>
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <input
          id="fullName"
          type="text"
          value={user?.user_metadata.fullname || ''}
          /* onChange={(e) => setFullname(e.target.value)} */
        />
      </div>
      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          type="text"
          value={user?.user_metadata.username || ''}
          /* onChange={(e) => setUsername(e.target.value)} */
        />
      </div>
      <div>
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          type="url"
          value={user?.user_metadata.website || ''}
          /* onChange={(e) => setWebsite(e.target.value)} */
        />
      </div>

      <div>
        <button
          className="button primary block"
          /* onClick={() => updateProfile({ fullname, username, website, avatar_url })}
          disabled={loading} */
        >
          {/*loading ? 'Loading ...' : 'Update'*/}
        </button>
      </div>

      <div>
        <form action="/api/auth/signout" method="post">
          <Button className="button block" type="submit">
            Sign out
          </Button>
        </form>
      </div>
    </div>
  )
}