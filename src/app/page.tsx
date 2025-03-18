import { BlogCard, Hero } from "@/components";
import Image from "next/image";
import { MagnifyingGlassIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Landing() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />

      <div className="flex mx-auto gap-8">
        <section className="w-[1042px]">
          <h1 className="font-extrabold text-4xl mb-6">Tất cả bài viết</h1>
          <Image src="/banner1.png" alt="Banner 1" width={100} height={100} style={{ width: "100%", height: "auto" }} />
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12">
            {[...Array(6)].map((_, index) => (
              <BlogCard key={index} />
            ))}
          </div>
        </section>

        <section className="w-[366px]">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="font-extrabold text-2xl mb-6">Tìm Kiếm</h1>
              <div className="px-2 py-3 bg-white rounded-xl">
                <div className="flex">
                  <input type="text" placeholder="Tìm kiếm bài viết" className="px-1 flex-1 outline-none" />
                  <button className="btn size-12 p-0 rounded-xl bg-[#15AA7A] text-white">
                    <MagnifyingGlassIcon className="size-6" />
                  </button>
                </div>
              </div>
            </div>
            <CategoryPanel
              items={[
                { title: "Tất cả", count: 108 },
                { title: "Thiết Kế Website", count: 36 },
                { title: "Thiết Kế App Mobile", count: 13 },
                { title: "Quản Lý Sản Xuất", count: 25 },
                { title: "Báo Chí Nói Về FOSO", count: 7 },
                { title: "Tin Tức FOSO", count: 5 },
              ]}
            />

            <Image src="/banner2.png" alt="Banner 2" width={100} height={100} style={{ width: "100%", height: "auto" }} />

            <Image src="/banner3.png" alt="Banner 3" width={100} height={100} style={{ width: "100%", height: "auto" }} />
          </div>
        </section>
      </div>

      <div className="flex justify-between">
        <button className="flex gap-2 cursor-pointer">
          <ArrowLeftIcon className="size-6" />
          Trang trước
        </button>
        <div className="flex gap-0.5">
          <button className="btn btn-ghost bg-[#D1F7EA]">1</button>
          <button className="btn btn-ghost">2</button>
          <button className="btn btn-ghost">3</button>
          <div className="size-10 grid place-items-center">...</div>
          <button className="btn btn-ghost">8</button>
          <button className="btn btn-ghost">9</button>
          <button className="btn btn-ghost">10</button>
        </div>
        <button className="flex gap-2 cursor-pointer">
          Trang kế tiếp
          <ArrowRightIcon className="size-6" />
        </button>
      </div>
    </div>
  );
}

const CategoryPanel = ({ items }: { items: Array<{ title: string; count: number }> }) => {
  return (
    <div>
      <h1 className="font-extrabold text-2xl mb-6">Danh Mục</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex justify-between pb-2 mb-4 border-b">
              <span>{item.title}</span>
              <span>{item.count}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
