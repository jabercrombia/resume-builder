import { GoogleAnalytics } from '@next/third-parties/google'


export default function Header() {
    return(
        
    <div className="container mx-auto">
        <GoogleAnalytics gaId="CKPL5K50S8" />
        <h1 className="text-2xl">Resume Builder</h1>
        <p>Once you are done click <strong>Save Resume</strong> and click <strong>Download PDF</strong>.</p>
        </div>)
}