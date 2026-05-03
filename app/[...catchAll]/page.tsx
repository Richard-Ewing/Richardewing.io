import { permanentRedirect } from 'next/navigation';

export default function CatchAllRoute() {
    // This file acts as the ultimate Sitewide 404 safety net.
    // If a request reaches this file, it means it didn't match ANY known 
    // static file or dynamic directory in the entire Next.js application.
    
    // Instead of serving a 404 Not Found page (which damages SEO and creates errors in GSC),
    // we issue an instant 308 Permanent Redirect to the home page.
    permanentRedirect('/');
}
