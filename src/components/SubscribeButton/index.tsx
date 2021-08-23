import { signIn, useSession } from 'next-auth/client';
import router, { useRouter } from 'next/router';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

type SubscribeButtonProps = {
    priceId: string;
}

export function SubscribeButton({ priceId } : SubscribeButtonProps) {
    const [session] = useSession();

    const route = useRouter();
		 
	async function handleSubscribe () {
        if (!session) {
            signIn('github');

            return;
        }

        if (session.activeSubscription) {
            router.push('/posts');

            return;
        }

        try {
            const response = await api.post('/subscribe')
    
            const { sessionId } = response.data;
        
            const stripe = await getStripeJs();
    
            await stripe.redirectToCheckout({ sessionId })
        } catch (e) {
            console.error('subscribe button error', e.message)
        }
	}
    
    return (
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={() => handleSubscribe()}
        >
            Subscribe Now
        </button>
    )
}
