import CurrentTime from 'components/utils/CurrentTime';

export default function TimerBar() {
  return (
    <div className="container px-4 mx-auto my-2">
      <div className="flex justify-between w-full p-2 pb-4 border-b border-gray-200">
        <div>
          <CurrentTime />
        </div>
      </div>
    </div>
  );
}
