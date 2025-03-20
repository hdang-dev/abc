import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { BlogCard } from "@/components";

export default function BlogPage() {
    return (
        <div className="max-w-[1440px] mx-auto">
            <div className="breadcrumbs text-sm">
                <ul>
                    <li><Link href="/">Trang chủ</Link></li>
                    <li><Link href="/">Tài nguyên</Link></li>
                    <li><Link href="/">Blog</Link></li>
                    <li className="font-bold">Quản Lý Sản Xuất</li>
                </ul>
            </div>

            <div className="flex gap-12">
                <section className="w-[900px]">
                    <div className="">
                        <div className="flex flex-col gap-4">
                            <div className="badge badge-soft badge-info">Quản Lý Sản Xuất</div>
                            <h1 className="font-extrabold text-4xl">Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết</h1>
                            <div className="flex justify-between items-center">
                                {/* Avatar and crator */}
                                <div className="flex gap-3 items-center">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <Image src="/avatar.svg" alt="avatar" width={100} height={100} className="size-16" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>Tác giả</span>
                                        <span className="font-bold">FOSO Creator</span>
                                    </div>
                                </div>

                                {/* Editted date and time */}
                                <div className="flex">
                                    <div className="flex gap-2">
                                        <CalendarIcon className="size-6" />
                                        <span>Cập nhật vào: 17/11/2022</span>
                                    </div>
                                    <div className="divider divider-horizontal" />
                                    <div className="flex gap-2">
                                        <ClockIcon className="size-6" />
                                        <span>10 phút đọc</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <BlogImage imageSrc="/blog-detail-1.svg" text="Quy trình 5s là gì?" />

                        <Quote text={`Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? 
                            Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết 
                            về mô hình này cũng như yếu tố tạo nên thành công của quy trình bạn nhé.`}
                        />

                        <SubTitle text="1. Quy trình 5S là gì?" />
                        <Text text="Quy trình 5S được biết đến là mô hình quản trị tinh gọn trQuy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu trong tiếng Nhật:ong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản." />
                        <Text text="Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu trong tiếng Nhật:" />
                        <ul className="list-disc marker:text-[#15AA7A] ml-3.5">
                            <li><span className="text-[#15AA7A] font-bold">Seiri</span> (Ngăn nắp)</li>
                            <li><span className="text-[#15AA7A] font-bold">Seiso</span> (Sạch sẽ)</li>
                            <li><span className="text-[#15AA7A] font-bold">Seiton</span> (Trật tự)</li>
                            <li><span className="text-[#15AA7A] font-bold">Shitsuke</span> (Kỷ luật)</li>
                            <li><span className="text-[#15AA7A] font-bold">Seiketsu</span> (Tiêu chuẩn hóa)</li>
                        </ul>


                        <SubTitle text="2. Lợi ích quy trình 5S đem lại" />
                        <Text text="Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi trường làm việc của doanh nghiệp." />
                        <Text text="Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết." />
                        <Text text="Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa doanh nghiệp tích cực." />
                        <BlogImage imageSrc="/blog-detail-2.svg" text="Tại sao doanh nghiệp cần quy trình 5S?" />

                        <SubTitle id="sub-title-3" text="3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?" />
                        <Text text="Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:" />
                        <SubTitle level={3} text="3.1 Cải thiện rõ nét môi trường làm việc" />
                        <Text text="Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp." />
                        <SubTitle level={3} text="3.2 Tiết kiệm thời gian đáng kể" />
                        <Text text="Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng." />
                        <SubTitle level={3} text="3.3 Tăng năng suất làm việc" />
                        <Text text="Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc." />
                        <SubTitle level={3} text="3.4 Tiết kiệm chi phí" />
                        <Text text="Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình." />
                        <SubTitle level={3} text="3.5 Tăng chất lượng sản phẩm" />
                        <Text text="5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn." />
                        <BlogImage imageSrc="/blog-detail-3.svg" text="Quy trình 5s gồm các bước" />

                        <SubTitle text="4. Quy trình 5S gồm các bước" />
                        <Text text="5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:" />
                        <SubTitle level={3} text="4.1 Seiri (Ngăn nắp)" />
                        <Text text="Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian." />
                        <SubTitle level={3} text="4.2 Seiton (Sắp xếp)" />
                        <Text text="Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng." />
                        <SubTitle level={3} text="4.3 Seiso (Vệ sinh)" />
                        <Text text="Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên." />
                        <SubTitle level={3} text="4.4 Seiketsu (Tiêu chuẩn hóa)" />
                        <Text text="Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu." />
                        <SubTitle level={3} text="4.5 Shitsuke (Kỷ luật)" />
                        <Text text="Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình." />
                        <BlogImage imageSrc="/blog-detail-4.svg" text="Các bước thực hiện quy trình 5s" />

                        <SubTitle text="5. Quy trình được thực hiện như sau:" />
                        <Text text="Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:" />
                        <SubTitle level={3} text="5.1 Giai đoạn chuẩn bị" />
                        <Text text="Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn." />
                        <SubTitle level={3} text="5.2 Triển khai rộng rãi " />
                        <Text text="Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn." />
                        <SubTitle level={3} text="5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp" />
                        <Text text="Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân." />
                        <SubTitle level={3} text="5.4 Sàng lọc, sắp xếp và đánh giá" />
                        <Text text="Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này. " />
                        <SubTitle level={3} text="5.5 Đánh giá" />
                        <Text text="Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá trình thực hiện quy trình 5S." />

                        <SubTitle text="6. Quy trình 5S có giống với Kaizen?" />
                        <Text text="Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau." />
                        <Quote variant="blockquote" text="Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững." />
                        <Quote variant="blockquote" text="Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. " />
                        <Text text="Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo." />

                        <SubTitle text="7. Đối tượng nào nên áp dụng 5S?" />
                        <Text text="Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ." />
                        <Text text="Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả." />
                        <BlogImage imageSrc="/blog-detail-5.svg" text="Các yếu tố tạo nên thành công cho quy trình 5S" />

                        <SubTitle text="8. Các yếu tố tạo nên thành công cho quy trình 5S" />
                        <Text text="Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:" />
                        <ul className="list-disc ml-3.5">
                            <li>Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.</li>
                            <li>Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S.</li>
                            <li>Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.</li>
                        </ul>
                        <Text text="Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai." />


                        <div className="mt-16 mb-24 bg-white rounded-3xl p-6">
                            <div className="flex flex-col items-center">
                                <span className="font-extrabold text-xl">Bạn thấy bài viết như thế nào?</span>
                                <span className="mt-2 mb-6">4 phản hồi</span>
                                <div className="flex gap-8">
                                    <ReactItem imageSrc="/icon-thumb.svg" count={1} name="Hữu ích" active />
                                    <ReactItem imageSrc="/icon-heart.svg" count={2} name="Yêu thích" />
                                    <ReactItem imageSrc="/icon-amazing.svg" count={0} name="Thú vị" />
                                    <ReactItem imageSrc="/icon-suprise.svg" count={1} name="Bất ngờ" />
                                    <ReactItem imageSrc="/icon-boring.svg" count={0} name="Nhàm chán" />
                                    <ReactItem imageSrc="/icon-angry.svg" count={0} name="Tức giận" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-[492px]">
                    <div className="collapse collapse-arrow collapse-open">
                        <input type="checkbox" />
                        <div className="collapse-title px-0 font-extrabold text-2xl">Nội dung bài viết</div>
                        <div className="collapse-content p-0 text-sm">
                            <BlogTree items={[
                                { text: "1. Quy trình 5s là gì?", link: "#" },
                                { text: "2. Lợi ích quy trình 5S đem lại", link: "#" },
                                {
                                    text: "3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?", link: "#",
                                    subItems: [
                                        { text: "3.1  Cải thiện rõ nét môi trường làm việc", link: "#" },
                                        { text: "3.2 Tiết kiệm thời gian đáng kể", link: "#" },
                                        { text: "3.3 Tăng năng suất làm việc", link: "#" },
                                        { text: "3.4 Tiết kiệm chi phí", link: "#" },
                                        { text: "3.5 Tăng chất lượng sản phẩm", link: "#" },
                                    ]
                                },
                                {
                                    text: "4. Quy trình 5S gồm các bước:", link: "#",
                                    subItems: [
                                        { text: "4.1 Seiri (Ngăn nắp)", link: "#" },
                                        { text: "4.2 Seiton (Sắp xếp)", link: "#" },
                                        { text: "4.3 Seiso (Vệ sinh)", link: "#" },
                                        { text: "4.4 Seiketsu (Tiêu chuẩn hóa)", link: "#" },
                                        { text: "4.5 Shitsuke (Kỷ luật)", link: "#" },
                                    ]
                                },
                                {
                                    text: "5. Quy trình được thực hiện như sau:", link: "#",
                                    subItems: [
                                        { text: "5.1 Giai đoạn chuẩn bị", link: "#" },
                                        { text: "5.2 Triển khai rộng rãi", link: "#" },
                                        { text: "5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp", link: "#" },
                                        { text: "5.4 Sàng lọc, sắp xếp và đánh giá", link: "#" },
                                        { text: "5.5 Đánh giá", link: "#" },
                                    ]
                                },
                                { text: "6. Quy trình 5S có giống với Kaizen?", link: "#" },
                                { text: "7. Đối tượng nào nên áp dụng 5S?", link: "#" },
                                { text: "8. Các yếu tố tạo nên thành công cho quy trình 5S", link: "#" },
                            ]} />
                        </div>
                    </div>
                    <Image src="/banner-2.svg" alt="Banner 2" width={100} height={100} style={{ width: "100%", height: "auto" }} />

                    <Image src="/banner-3.svg" alt="Banner 3" width={100} height={100} style={{ width: "100%", height: "auto" }} />
                </section>
            </div>

            <div>
                <h2 className="font-extrabold text-4xl">Bài viết liên quan</h2>
                <div className="flex gap-8">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
        </div>
    );
}

const BlogImage = ({ imageSrc, text }: { imageSrc: string, text: string; }) => {
    return (
        <div className="[&:not(:first-child)]:mt-6 w-full">
            <Image src={imageSrc} alt={text} width={100} height={100} className="w-full h-auto" />
            <p className="mt-2 text-center">{text}</p>
        </div>
    );
};

const Quote = ({ text, variant }: { text: string, variant?: 'quote' | 'blockquote'; }) => {
    return (
        <div className={`[&:not(:first-child)]:mt-6 px-14 py-3 text-center italic ${variant === 'quote' ? 'relative' : 'border-l-[3px] border-l-[var(--primary)]'}`}>
            {variant === 'quote' && (
                <Image src="/double-quote.svg" alt="double-quote" width={100} height={100} className="absolute top-0 left-0 size-12 -translate-y-1/3" />
            )}
            <p className="text-xl">{text}</p>
        </div>
    );
};

const SubTitle = ({ text, level, id }: { text: string, level?: number; id?: string; }) => {
    const className = "[&:not(:first-child)]:mt-6 text-[#15AA7A]";
    if (level === 3) {
        return <h3 id={id} className={`${className} font-bold`}>{text}</h3>;
    }
    return (
        <h2 id={id} className={`${className} text-xl font-extrabold`}>{text}</h2>
    );
};

const Text = ({ text }: { text: string; }) => {
    return (
        <p className="[&:not(:first-child)]:mt-4">{text}</p>
    );
};


const ReactItem = ({ imageSrc, count, name, active }: { imageSrc: string, count: number, name: string; active?: boolean; }) => {
    return (
        <button className={`w-[90px] h-[109px] ${active ? 'border rounded-sm border-[var(--primary)]' : ''}`}>
            <div className="flex flex-col gap-1 justify-center items-center">
                <Image src={imageSrc} alt={name} width={100} height={100} className="size-12" />
                <span className="font-bold">{count}</span>
                <span>{name}</span>
            </div>
        </button>
    );
};

interface IBlogTreeItem {
    text: string,
    link: string;
    subItems?: IBlogTreeItem[];
}

const BlogTree = ({ items }: { items: IBlogTreeItem[]; }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <Link href={item.link} className="text-lg leading-[200%]">{item.text}</Link>
                    {item.subItems && (
                        <div className="ml-6">
                            <BlogTree items={item.subItems} />
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};