import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (<html lang='en'>
    <body>
      <div className={styles.wrapper}>
        <div className={styles.body}>
          Auth
        </div>
          {children}
      </div>
    </body>
  </html>
  );
}
