import { GoogleAnalytics } from '@next/third-parties/google'

export default function Header() {
    return(
    <div className="container mx-auto md:w-9/12">
        <GoogleAnalytics gaId="G-ZD8JDCF4DQ" />
        <h1 style={{fontSize: 60}}>Resume Builder</h1>
        <p>Fill out the form to generate a resume in a PDF format. Once you will be prompted to download the PDF.</p>
    </div>
    )
}