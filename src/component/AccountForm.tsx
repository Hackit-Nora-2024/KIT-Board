'use client'
import { User} from '@supabase/auth-helpers-nextjs'
import { Button, Input, Label } from '@yamada-ui/react'

export default function AccountForm({ user }: { user: User | null }) {

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