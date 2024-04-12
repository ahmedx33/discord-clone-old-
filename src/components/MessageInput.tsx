export default function MessageInput({ placeholder }: { placeholder: string }) {
      return (
            <div>
                  <input
                        name="message"
                        type="text"
                        className="w-[500px] h-[30px] bg-[#383A40] placeholder:text-white outline-none caret-white p-3 rounded-md text-white"
                        placeholder={`Message ${placeholder}`}
                  />
            </div>
      );
}
