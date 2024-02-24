import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-cyan-900/70 flex flex-col ">
      <div className="flex h-screen bg-[url(/image/jumbo.jpg)] w-full text-9xl font-extrabold text-white justify-center items-center">
        <span className='drop-shadow-2xl'>CHINA BLOG</span>
      </div>
      <div className="flex flex-row">
        <div className= "flex basis-1/4 bg-slate-200 justify-center h-full">
        <Image
          src="/image/sexyxuan.png"
          width={250}
          height={250} 
          alt="Sexy xuan"
          className="object-contain animate-bounce"
        />
        </div>
        <div className= "flex basis-3/4 bg-slate-600 p-8 text-white text-xl ">
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Adipiscing diam donec adipiscing tristique risus nec feugiat. Est velit egestas dui id ornare arcu. Cras semper auctor neque vitae. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Purus gravida quis blandit turpis cursus in hac habitasse platea. Duis ultricies lacus sed turpis tincidunt. Turpis egestas integer eget aliquet nibh. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Lectus mauris ultrices eros in cursus. Sed arcu non odio euismod lacinia at quis risus sed.
          </div>
        </div>
      </div>
    </main>
  );
}
