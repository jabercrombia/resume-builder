import { GoogleAnalytics } from '@next/third-parties/google'

export default function Header() {
    return(
    <div className="container mx-auto">
        <GoogleAnalytics gaId="G-ZD8JDCF4DQ" />
        <h1 style={{fontSize: 60}}>Resume Builder</h1>
        <p>Once you are done click <strong>Save Resume</strong> and click <strong>Download PDF</strong>.</p>
    </div>
    )
}