'use client'
import { User} from '@supabase/auth-helpers-nextjs'

export default function AccountForm({ user }: { user: User | null }) {

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={user?.email} disabled />
      </div>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={user?.user_metadata.fullname || ''}
          /* onChange={(e) => setFullname(e.target.value)} */
        />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={user?.user_metadata.username || ''}
          /* onChange={(e) => setUsername(e.target.value)} */
        />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input
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
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  )
}