import { useSession, signIn, signOut } from "next-auth/react"
import AccessDenied from "../components/acessDenied"

export default function Component() 
{
	const { data: session } = useSession()
	
	if(session) 
	{
		return (
			<div>
				<p className="underline">Signed in as {session.user.email}</p> 
				<button onClick={() => signOut()}>Sign out</button>
			</div>
		)
	}
	return (
		<>
			<p className="underline">Not Signed in</p> 
			<AccessDenied />
			<button className="font-large" onClick={() => signIn()}>Sign in</button>
		</>
	)
}
