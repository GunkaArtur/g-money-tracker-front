// @ts-expect-error resolve here with Telegram
const tg = window.Telegram.WebApp;

export function useTg() {
  const onClose = () => {
    tg.close();
  };

  return {
    tg,
    onClose,
    user: tg.initDataUnsafe?.user?.username,
  };
}
