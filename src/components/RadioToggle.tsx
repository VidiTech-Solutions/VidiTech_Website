interface Props {
  isActive: boolean;
  onChange: () => void;
}

const RadioToggle = ({ isActive, onChange }: Props) => {
  return (
    <div>
      <label className="flex items-center gap-x-2 cursor-pointer">
        <input
          onChange={() => {
            onChange();
          }}
          type="checkbox"
          checked={isActive}
          className="hidden"
        />
        <div className="relative">
          <div
            className={`bg-[#E7E9FE] py-3 px-6 rounded-2xl duration-300 ${
              isActive ? "bg-[#A234FD]" : ""
            } `}
          ></div>
          <div
            className={`p-3 bg-[#A234FD] rounded-full transform absolute bottom-0 ${
              isActive ? "translate-x-6" : ""
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default RadioToggle;
