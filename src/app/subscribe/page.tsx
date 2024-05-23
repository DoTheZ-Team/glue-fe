import Subscription from './components/Subscription';
// import Feed from './components/Feed';

export default function Page() {
  return (
    <section className="w-full flex flex-row py-50">
      <Subscription />
      <p className="h-500 w-1 bg-primary mt-100 ml-220 fixed" />
      {/* <Feed /> */}
    </section>
  );
}
