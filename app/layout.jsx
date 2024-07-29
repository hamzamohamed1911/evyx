import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';

export const metadata = {
  title: "Evyx",
  description:
    " نحن نهدف إلى جعل النجاح في متناول كل شركة، بغض النظر عن حجم أعمالك. نحن هنا لنجعلها لامعة في هذا العالم التنافسي، ببساطة نحن هنا لترجمة عملك إلى النجاح ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <GoogleTagManager gtmId="GTM-WN59CD72" />
      <body style={{ fontFamily: "Almarai, sans-serif" }}>
        {children}
        </body>
    </html>
  );
}
