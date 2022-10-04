// ---
// export interface Props {
//     name: string;
//     description: string;
// }

// const { name, description } = Astro.props;

// const download = () => {
//     alert("Command to install extension copied to clipboard!");
// }
// ---

// <div>
//     <div class="rounded-lg p-6 bg-[#202731]">
//         <div class="flex flex-row items-center justify-between pb-5">
//             <h3 class="font-['Sora'] text-[#fff0ed]">{name}</h3>
//             <button onclick="download()" class="rounded-full bg-[#fff0ed] flex flex-col items-center p-3">
//                 <img src="/download.svg" />
//             </button>
//         </div>
//         <div class="text-[#fff0ed]">{description}</div>
//     </div>
// </div>
export default function Card({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const download = () => {
    navigator.clipboard.writeText("rrpm install "+name)
    alert("Command to install extension copied to clipboard!");
  };

  return (
    <div>
      <div className="rounded-lg p-6 bg-[#202731]">
        <div className="flex flex-row items-center justify-between pb-5">
          <h3 className="font-['Sora'] text-[#fff0ed]">{name}</h3>
          <button
            onClick={download}
            className="rounded-full bg-[#fff0ed] flex flex-col items-center p-3"
          >
            <img src="/download.svg" />
          </button>
        </div>
        <div className="text-[#fff0ed]">{description}</div>
      </div>
    </div>
  );
}
