import { Card, Chip, Image } from "@nextui-org/react";

export const SectionBlog = () => {
    const posts = [
        {
            thumbnail: "https://img.freepik.com/free-photo/turquoise-tropical-beautiful-outdoors-tourism_1258-134.jpg?t=st=1727107264~exp=1727110864~hmac=fabe26e56f69f7af8b538747f83a9d375ec5e33551d7d1b25231fe82f7c558c9&w=1380",
            category: 'Adventure',
            readTime: '5 min read',
            title: 'Hiking the Inca Trail to Machu Picchu',
            description: 'Embark on a thrilling adventure through the ancient ruins of Machu Picchu.',
        },
        {
            thumbnail: 'https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?t=st=1727107013~exp=1727110613~hmac=74615bf961c8fe95db2233bbf315e4b4019d46ffb5300a320ba6034f378678e0&w=1380',
            category: 'Adventure',
            readTime: '5 min read',
            title: 'Exploring the Serengeti on Safari',
            description: 'Witness the incredible wildlife of the Serengeti on an unforgettable safari.',
        },
        {
            thumbnail: "https://img.freepik.com/free-photo/night-cityscape-bangkok-thailand_1150-11147.jpg?t=st=1727107297~exp=1727110897~hmac=7d3a033e95a19524ffa4e2b4a0cf70edff4a577be2b60164cad8ace091f1ddbe&w=1380",
            category: 'Safari',
            readTime: '5 min read',
            title: 'Island Hopping in Greece',
            description: 'Experience the beauty of the Greek islands on a magical island hopping adventure.',
        },
    ];
    return (
        <main className="relative">
            <div className="min-h-screen bg-cover bg-center bg-fixed" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1501950183564-3c8ac97d08f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
            }}>
                <div className="bg-white bg-opacity-90 min-h-screen flex items-center">
                    <div className="container mx-auto px-4 py-12">
                        <header className="mb-12">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore the World</h1>
                            <p className="text-xl text-gray-600">Discover amazing travel experiences and destinations.</p>
                        </header>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <Card key={index} className="border border-gray-200 overflow-hidden py-6" radius="lg">
                                    <div className="w-full px-6 pb-6">
                                        <Image
                                            src={post.thumbnail}
                                            alt="Blog post thumbnail"
                                            // width={400}
                                            // height={200}
                                            className="w-screen h-64"
                                        />
                                    </div>
                                    <div className="px-6 py-0">
                                        <div className="flex justify-between items-center mb-4">
                                            <Chip size="md" variant="solid" color="primary">  {post.category}</Chip>
                                            <span className="text-gray-500 text-sm">{post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                                        <p className="text-gray-600 mb-4">{post.description}</p>
                                        <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                                            Read more
                                        </a>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}