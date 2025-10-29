import { BrowserTo } from "@/lib/constants/browserTo.enum";

const execBrowserTo = ({
    to
}: {
    to: BrowserTo
}) => {

    const exeTo: Record<BrowserTo, () => void> = {
        [BrowserTo.LINKEDIN]: () => {
            window.open('https://es.linkedin.com/in/s4nchzz', '_blank', 'noopener,noreferrer');
        },
        [BrowserTo.GITHUB]: () => {
            window.open('https://github.com/S4nchzz', '_blank', 'noopener,noreferrer');
        },
        [BrowserTo.RESUME]: () => {
            window.open('/util/resume.pdf','_blank', 'noopener,noreferrer')
        },
        [BrowserTo.CONTACT]: () => {
            window.open('mailto:contact@s4nchzz.com', '_blank', 'noopener,noreferrer');
        },
        [BrowserTo.FORTUNE_FRONT]: () => {
            window.open('https://github.com/S4nchzz/fortune-app-frontend', '_blank', 'noopener,noreferrer');
        },
        [BrowserTo.FORTUNE_BACK]: () => {
            window.open('https://github.com/S4nchzz/fortune-api-backend', '_blank', 'noopener,noreferrer');
        },
        [BrowserTo.PORTFOLIO]: () => {
            window.open('https://github.com/S4nchzz/PortfolioOS', '_blank', 'noopener,noreferrer');
        }
    }

    return exeTo[to]()
}

export default execBrowserTo