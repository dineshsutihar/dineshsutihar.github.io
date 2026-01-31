// Blog data with comprehensive content for the blog section

export type ContentSectionType = 'heading' | 'paragraph' | 'code' | 'list' | 'quote' | 'image';

export interface ContentSection {
    type: ContentSectionType;
    content?: string; // Optional for list type which uses items instead
    language?: string; // For code blocks
    level?: number; // For headings (2, 3, 4)
    items?: string[]; // For lists
}


export interface Blog {
    slug: string;
    title: string;
    excerpt: string;
    author: string;
    publishedAt: string;
    updatedAt?: string;
    readingTime: number;
    tags: string[];
    category: string;
    coverImage: string;
    seoDescription: string;
    keywords: string[];
    continuedPart?: string;
    sections: ContentSection[];
}

export const blogs: Blog[] = [
    {
        "slug": "low-level-design-patterns-definitive-guide-part-1",
        "title": "Part 1: Low-Level Design Patterns: The Definitive 0→1 Guide for Software Engineers",
        "excerpt": "An exhaustive, industry-grade guide to Low-Level Design patterns. This blog explains every major design pattern in depth, why it exists, when to use it, when NOT to use it, and how senior engineers think about design trade-offs.",
        "author": "Dinesh Sutihar",
        "publishedAt": "2026-02-01",
        "readingTime": 75,
        "tags": [
            "Low Level Design",
            "Design Patterns",
            "Object Oriented Design",
            "Software Engineering",
            "System Design Interviews"
        ],
        "category": "Low Level Design",
        "coverImage": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600",
        "seoDescription": "A complete low-level design guide covering all major creational, structural, and behavioral design patterns with deep explanations and real-world relevance.",
        "keywords": [
            "low level design",
            "lld patterns",
            "design patterns explained",
            "object oriented design",
            "software architecture",
            "lld interview preparation"
        ],
        "sections": [
            {
                "type": "heading",
                "content": "Introduction to Low-Level Design",
                "level": 2
            },
            {
                "type": "paragraph",
                "content": "Low-Level Design (LLD) is the discipline of structuring software at the class, object, and interaction level. It translates high-level architectural ideas into concrete, maintainable, and extensible designs. Where High-Level Design answers *what components exist*, LLD answers *how those components are implemented internally*."
            },
            {
                "type": "paragraph",
                "content": "A strong LLD prevents rigid code, reduces unintended side effects, and allows systems to evolve over years. Most large-scale production failures are not caused by syntax errors, but by poor low-level design decisions that make systems fragile under change."
            },

            {
                "type": "heading",
                "content": "Creational Design Patterns",
                "level": 2
            },

            {
                "type": "heading",
                "content": "1. Singleton Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "The Singleton pattern ensures that a class has exactly one instance and provides a global access point to it. The motivation behind Singleton is controlled access to shared resources such as configuration objects, logging services, or connection managers. Without control, multiple instances could lead to inconsistent behavior or resource exhaustion."
            },
            {
                "type": "paragraph",
                "content": "Despite its popularity, Singleton is one of the most misused patterns. It introduces global state, which tightly couples consumers to the concrete implementation. This makes testing difficult, particularly in parallel or isolated test environments. Senior engineers use Singleton sparingly and often prefer dependency injection with explicit lifecycle control instead."
            },

            {
                "type": "heading",
                "content": "2. Factory Method Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "The Factory Method pattern defines an interface for creating objects while allowing subclasses to decide which concrete class to instantiate. The key goal is to decouple object creation from object usage. Clients depend only on abstractions, not concrete implementations."
            },
            {
                "type": "paragraph",
                "content": "This pattern is especially valuable when object creation logic becomes complex or when the system must support future extensions without modifying existing code. Factory Method aligns strongly with the Open/Closed Principle and is widely used in frameworks where users extend behavior through subclassing."
            },

            {
                "type": "heading",
                "content": "3. Abstract Factory Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "Abstract Factory provides an interface for creating families of related objects without specifying their concrete classes. Unlike Factory Method, which focuses on a single product, Abstract Factory ensures consistency across multiple related products."
            },
            {
                "type": "paragraph",
                "content": "This pattern is commonly used when systems must support multiple platforms or configurations, such as different UI themes or database vendors. The trade-off is increased complexity, as adding a new product family requires creating new factories and implementations."
            },

            {
                "type": "heading",
                "content": "4. Builder Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "The Builder pattern separates the construction of a complex object from its representation. It addresses the problem of constructors with too many parameters, especially when many parameters are optional."
            },
            {
                "type": "paragraph",
                "content": "Builder improves readability, enforces immutability, and allows step-by-step object creation. It is commonly used in APIs, configuration objects, and request builders. The cost is additional classes, but the clarity gained usually outweighs the overhead."
            },

            {
                "type": "heading",
                "content": "5. Prototype Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "Prototype creates new objects by cloning existing ones instead of instantiating new ones. This pattern is useful when object creation is expensive or complex, such as when objects require costly setup or external resources."
            },
            {
                "type": "paragraph",
                "content": "Prototype shifts complexity to cloning logic and requires careful handling of deep vs shallow copies. It is less commonly used but valuable in performance-sensitive systems or when object structures are highly dynamic."
            },

            {
                "type": "heading",
                "content": "Structural Design Patterns",
                "level": 2
            },

            {
                "type": "heading",
                "content": "6. Adapter Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "Adapter allows incompatible interfaces to work together by converting one interface into another expected by the client. It enables reuse of existing code without modification."
            },
            {
                "type": "paragraph",
                "content": "Adapters are essential when integrating third-party libraries or legacy systems. They localize incompatibility and prevent it from spreading throughout the codebase."
            },

            {
                "type": "heading",
                "content": "7. Bridge Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "Bridge decouples an abstraction from its implementation, allowing both to vary independently. It prevents class explosion caused by combining multiple dimensions of variation through inheritance."
            },
            {
                "type": "paragraph",
                "content": "This pattern is particularly useful in frameworks and libraries where abstractions and implementations evolve separately."
            },

            {
                "type": "heading",
                "content": "8. Composite Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "Composite allows clients to treat individual objects and compositions uniformly. It is commonly used to represent tree structures such as file systems, UI hierarchies, and organizational charts."
            },
            {
                "type": "paragraph",
                "content": "The strength of Composite lies in its simplicity for clients, though it can make it harder to restrict operations on leaf nodes."
            },

            {
                "type": "heading",
                "content": "9. Decorator Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "Decorator dynamically adds responsibilities to objects without modifying their code. It provides a flexible alternative to subclassing."
            },
            {
                "type": "paragraph",
                "content": "Decorators are widely used for cross-cutting concerns like logging, caching, and authorization. Excessive nesting, however, can hurt readability if not carefully managed."
            },

            {
                "type": "heading",
                "content": "10. Facade Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "Facade provides a simplified interface to a complex subsystem. It reduces cognitive load and shields clients from internal complexity."
            },
            {
                "type": "paragraph",
                "content": "Facade does not remove subsystem functionality; it merely organizes access. It is commonly used at service or module boundaries."
            },

            {
                "type": "heading",
                "content": "11. Flyweight Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "Flyweight minimizes memory usage by sharing intrinsic state across many objects. It is effective when large numbers of similar objects exist."
            },
            {
                "type": "paragraph",
                "content": "The trade-off is increased complexity in managing shared and extrinsic state."
            },

            {
                "type": "heading",
                "content": "12. Proxy Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "Proxy controls access to another object by acting as an intermediary. Proxies can enforce security, enable lazy loading, or manage remote access."
            },
            {
                "type": "paragraph",
                "content": "Proxies are foundational to many frameworks, including ORM tools and RPC systems."
            },

            {
                "type": "heading",
                "content": "Behavioral Design Patterns",
                "level": 2
            },

            {
                "type": "heading",
                "content": "13. Chain of Responsibility",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "Chain of Responsibility passes a request through a chain of handlers until one processes it. This pattern decouples senders from receivers."
            },
            {
                "type": "paragraph",
                "content": "It is commonly used in logging frameworks, middleware pipelines, and request validation systems."
            },

            {
                "type": "heading",
                "content": "14. Command Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "Command encapsulates a request as an object, enabling parameterization, queuing, and undo functionality."
            },
            {
                "type": "paragraph",
                "content": "This pattern is widely used in task scheduling, UI actions, and distributed job systems."
            },

            {
                "type": "heading",
                "content": "15. Iterator Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "Iterator provides sequential access to elements without exposing internal structure. It promotes encapsulation and uniform traversal."
            }
        ]
    },

    {
        "slug": "low-level-design-patterns-definitive-guide-part-2",
        "title": "Part - 2: Low-Level Design Patterns: The Definitive 0→1 Guide for Software Engineers",
        "author": "Dinesh Sutihar",
        "excerpt": "Deep dive into Structural Design Patterns. Learn how to compose objects and classes to form larger, flexible structures using Adapter, Bridge, Composite, and more.",
        "publishedAt": "2026-02-08",
        "readingTime": 20,
        "tags": [
            "Low Level Design",
            "Design Patterns",
            "Structural Patterns",
            "Software Architecture"
        ],
        "category": "Low Level Design",
        "coverImage": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600",
        "seoDescription": "In-depth guide to Structural Design Patterns in Low-Level Design, covering Adapter, Bridge, Composite, Decorator, Facade, Flyweight, and Proxy patterns.",
        "keywords": [
            "structural design patterns",
            "adapter pattern",
            "bridge pattern",
            "composite pattern",
            "decorator pattern",
            "facade pattern",
            "flyweight pattern",
            "proxy pattern"
        ],
        "continuedPart": "PART 2 – Structural Design Patterns (Deep Dive)",
        "sections": [
            {
                "type": "heading",
                "content": "Structural Design Patterns – Deep Dive",
                "level": 2
            },
            {
                "type": "paragraph",
                "content": "Structural design patterns focus on how classes and objects are composed to form larger structures while keeping those structures flexible, efficient, and maintainable. Unlike creational patterns, which deal with object creation, structural patterns are primarily concerned with object relationships. Senior engineers rely heavily on these patterns because most real-world complexity emerges not from object creation, but from how objects interact and depend on one another over time."
            },
            {
                "type": "paragraph",
                "content": "A well-applied structural pattern reduces tight coupling, prevents ripple effects during change, and improves long-term maintainability. Poor structural design, on the other hand, leads to fragile systems where modifying one class breaks many others. The following patterns represent the most widely used and battle-tested structural solutions in production systems."
            },

            {
                "type": "heading",
                "content": "6. Adapter Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "The Adapter pattern allows two incompatible interfaces to work together by acting as a translation layer between them. Its primary purpose is not to add new functionality, but to make existing functionality usable in a new context without modifying the original code. This is extremely important in real-world systems where third-party libraries, legacy systems, or external APIs cannot be changed."
            },
            {
                "type": "paragraph",
                "content": "From a low-level design perspective, Adapter protects the rest of the system from change. If the adapted dependency changes, only the adapter needs to be updated, not every consumer. Senior engineers often introduce adapters at system boundaries, especially when integrating payment gateways, external services, or vendor SDKs. The trade-off is an additional abstraction layer, but this cost is negligible compared to the stability gained. Adapter is a defensive pattern—it anticipates change and contains it."
            },

            {
                "type": "heading",
                "content": "7. Bridge Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "The Bridge pattern decouples an abstraction from its implementation so that the two can evolve independently. It addresses a common design problem: class explosion caused by inheritance. When multiple dimensions of variation exist, inheritance quickly becomes unmanageable. Bridge replaces inheritance with composition, separating what a class does from how it does it."
            },
            {
                "type": "paragraph",
                "content": "In practice, Bridge is heavily used in frameworks, libraries, and platform-independent code. It allows engineers to extend behavior along multiple axes without modifying existing code. However, Bridge introduces additional indirection, which can make the design harder to understand for inexperienced developers. Senior engineers use Bridge when long-term extensibility outweighs short-term simplicity."
            },

            {
                "type": "heading",
                "content": "8. Composite Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "The Composite pattern allows individual objects and compositions of objects to be treated uniformly. It is most commonly used to represent hierarchical or tree-like structures, such as file systems, UI component trees, or organizational hierarchies. Clients interact with both leaf nodes and composite nodes through the same interface."
            },
            {
                "type": "paragraph",
                "content": "The major advantage of Composite is simplicity for the client. The client does not need to distinguish between simple and complex objects. However, this flexibility comes at a cost: it becomes harder to enforce constraints on leaf nodes. Senior engineers use Composite when uniform behavior is more important than strict type safety."
            },

            {
                "type": "heading",
                "content": "9. Decorator Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "Decorator allows behavior to be added to an object dynamically without modifying its structure or using inheritance. It works by wrapping the original object and delegating calls while adding new behavior before or after the delegation. This pattern follows the Open/Closed Principle by enabling extension without modification."
            },
            {
                "type": "paragraph",
                "content": "Decorator is extensively used for cross-cutting concerns such as logging, authentication, caching, and compression. Compared to inheritance, Decorator provides much greater flexibility. However, excessive layering can reduce readability and complicate debugging. Senior engineers carefully balance flexibility with clarity when using this pattern."
            },

            {
                "type": "heading",
                "content": "10. Facade Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "The Facade pattern provides a simplified interface to a complex subsystem. Its goal is not to hide functionality, but to reduce cognitive load and coupling. Facade defines a higher-level interface that makes the subsystem easier to use and understand."
            },
            {
                "type": "paragraph",
                "content": "In large systems, subsystems often grow organically and become difficult to use correctly. Facade acts as a protective layer that enforces proper usage patterns. Senior engineers often introduce facades at module boundaries or public APIs to prevent misuse and reduce dependency spread."
            },

            {
                "type": "heading",
                "content": "11. Flyweight Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "The Flyweight pattern reduces memory usage by sharing common object state across many objects. It is particularly effective when dealing with a large number of fine-grained objects that share significant intrinsic data. The key idea is separating intrinsic (shared) state from extrinsic (context-specific) state."
            },
            {
                "type": "paragraph",
                "content": "Flyweight is commonly used in rendering engines, text editors, and caching systems. While it offers significant memory savings, it increases complexity and requires careful state management. Senior engineers apply Flyweight only when memory pressure is a real concern, not prematurely."
            },

            {
                "type": "heading",
                "content": "12. Proxy Pattern",
                "level": 3
            },
            {
                "type": "paragraph",
                "content": "The Proxy pattern provides a surrogate or placeholder for another object to control access to it. Proxies can manage lazy initialization, access control, logging, or remote communication. The client interacts with the proxy as if it were the real object."
            },
            {
                "type": "paragraph",
                "content": "Proxy is foundational in many modern frameworks, including ORMs, security layers, and RPC systems. While powerful, proxies can obscure execution flow and introduce unexpected behavior if not documented clearly. Senior engineers use proxies deliberately and transparently."
            }
        ]
    },


    {
        "slug": "patterns-in-data-structures",
        "title": "Patterns in Data Structures: A Comprehensive Guide",
        "excerpt": "Master the most important and reusable data structure and algorithm patterns used in coding interviews and real-world systems.",
        "author": "Dinesh Sutihar",
        "publishedAt": "2026-01-15",
        "readingTime": 12,
        "tags": ["DSA", "Algorithms", "Interview Prep", "Problem Solving"],
        "category": "Data Structures",
        "coverImage": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200",
        "seoDescription": "A practical guide to the most important data structure and algorithm patterns such as sliding window, BFS/DFS, heaps, backtracking, and dynamic programming.",
        "keywords": ["data structures", "algorithms", "coding patterns", "interview preparation"],
        "sections": [
            { "type": "heading", "content": "Introduction", "level": 2 },
            { "type": "paragraph", "content": "Data Structures and Algorithms (DSA) problems may appear endless at first glance, but most of them are built on a small set of reusable patterns. Instead of memorizing thousands of problems, understanding these core patterns allows you to recognize problem structures and apply proven solutions efficiently. This article distills the most important, non-overlapping patterns across arrays, linked lists, trees, graphs, heaps, and dynamic programming." },

            { "type": "heading", "content": "1. Sliding Window", "level": 2 },
            { "type": "paragraph", "content": "Sliding Window is used when working with contiguous subarrays or substrings. Instead of recalculating results for each window, the window slides forward by adding one element and removing another." },
            { "type": "code", "language": "java", "content": "public class SlidingWindow {\n    public static int maxSumSubarray(int k, int[] arr) {\n        int windowSum = 0, maxSum = 0, start = 0;\n        for (int end = 0; end < arr.length; end++) {\n            windowSum += arr[end];\n            if (end >= k - 1) {\n                maxSum = Math.max(maxSum, windowSum);\n                windowSum -= arr[start++];\n            }\n        }\n        return maxSum;\n    }\n}" },

            { "type": "heading", "content": "2. Two Pointers", "level": 2 },
            { "type": "paragraph", "content": "The Two Pointers pattern uses two indices moving toward each other or in the same direction. It is especially effective for sorted arrays or linked lists." },
            { "type": "code", "language": "java", "content": "public class TwoPointers {\n    public static boolean hasPair(int[] arr, int target) {\n        int l = 0, r = arr.length - 1;\n        while (l < r) {\n            int sum = arr[l] + arr[r];\n            if (sum == target) return true;\n            if (sum < target) l++; else r--;\n        }\n        return false;\n    }\n}" },

            { "type": "heading", "content": "3. Fast & Slow Pointers", "level": 2 },
            { "type": "paragraph", "content": "Fast & Slow pointers are commonly used in linked lists to detect cycles, find middle nodes, or check palindromes." },
            { "type": "code", "language": "java", "content": "class ListNode { int val; ListNode next; }\n\npublic class CycleDetection {\n    public static boolean hasCycle(ListNode head) {\n        ListNode slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n            if (slow == fast) return true;\n        }\n        return false;\n    }\n}" },

            { "type": "heading", "content": "4. Merge Intervals", "level": 2 },
            { "type": "paragraph", "content": "Merge Intervals solves problems involving overlapping ranges by sorting intervals and merging when overlaps occur." },
            { "type": "code", "language": "java", "content": "import java.util.*;\n\npublic class MergeIntervals {\n    public static int[][] merge(int[][] intervals) {\n        Arrays.sort(intervals, (a,b) -> a[0]-b[0]);\n        List<int[]> res = new ArrayList<>();\n        int[] cur = intervals[0];\n        for (int i = 1; i < intervals.length; i++) {\n            if (intervals[i][0] <= cur[1])\n                cur[1] = Math.max(cur[1], intervals[i][1]);\n            else { res.add(cur); cur = intervals[i]; }\n        }\n        res.add(cur);\n        return res.toArray(new int[res.size()][]);\n    }\n}" },

            { "type": "heading", "content": "5. In-place Linked List Reversal", "level": 2 },
            { "type": "paragraph", "content": "Many linked list problems require reversing nodes without using extra memory." },
            { "type": "code", "language": "java", "content": "public class ReverseList {\n    public static ListNode reverse(ListNode head) {\n        ListNode prev = null, curr = head;\n        while (curr != null) {\n            ListNode next = curr.next;\n            curr.next = prev;\n            prev = curr;\n            curr = next;\n        }\n        return prev;\n    }\n}" },

            { "type": "heading", "content": "6. Tree BFS & DFS", "level": 2 },
            { "type": "paragraph", "content": "Tree traversal problems are efficiently solved using BFS for level-order logic and DFS for depth-based logic." },
            { "type": "code", "language": "java", "content": "import java.util.*;\n\nclass TreeNode { int val; TreeNode left, right; }\n\npublic class TreeTraversal {\n    public static void dfs(TreeNode root) {\n        if (root == null) return;\n        dfs(root.left);\n        dfs(root.right);\n    }\n\n    public static void bfs(TreeNode root) {\n        Queue<TreeNode> q = new LinkedList<>();\n        q.add(root);\n        while (!q.isEmpty()) {\n            TreeNode node = q.poll();\n            if (node.left != null) q.add(node.left);\n            if (node.right != null) q.add(node.right);\n        }\n    }\n}" },

            { "type": "heading", "content": "7. Heap / Top-K", "level": 2 },
            { "type": "paragraph", "content": "Heap-based patterns are ideal when problems require finding the top or bottom K elements efficiently." },
            { "type": "code", "language": "java", "content": "import java.util.*;\n\npublic class TopK {\n    public static int[] kLargest(int[] nums, int k) {\n        PriorityQueue<Integer> pq = new PriorityQueue<>();\n        for (int n : nums) {\n            pq.add(n);\n            if (pq.size() > k) pq.poll();\n        }\n        return pq.stream().mapToInt(i->i).toArray();\n    }\n}" },

            { "type": "heading", "content": "8. Backtracking (Subsets & Permutations)", "level": 2 },
            { "type": "paragraph", "content": "Backtracking systematically explores all valid configurations by making a choice, exploring, and undoing it." },
            { "type": "code", "language": "java", "content": "import java.util.*;\n\npublic class Subsets {\n    public static void backtrack(int idx, int[] nums, List<Integer> cur, List<List<Integer>> res) {\n        res.add(new ArrayList<>(cur));\n        for (int i = idx; i < nums.length; i++) {\n            cur.add(nums[i]);\n            backtrack(i + 1, nums, cur, res);\n            cur.remove(cur.size() - 1);\n        }\n    }\n}" },

            { "type": "heading", "content": "9. Graph Traversal (BFS / DFS)", "level": 2 },
            { "type": "paragraph", "content": "Graph traversal patterns form the foundation for connectivity, shortest path, and cycle detection problems." },
            { "type": "code", "language": "java", "content": "import java.util.*;\n\npublic class GraphDFS {\n    public static void dfs(int node, List<List<Integer>> g, boolean[] vis) {\n        vis[node] = true;\n        for (int nei : g.get(node))\n            if (!vis[nei]) dfs(nei, g, vis);\n    }\n}" },

            { "type": "heading", "content": "10. Topological Sort", "level": 2 },
            { "type": "paragraph", "content": "Topological Sort applies to Directed Acyclic Graphs (DAGs) where ordering with dependencies is required." },
            { "type": "code", "language": "java", "content": "import java.util.*;\n\npublic class TopoSort {\n    public static List<Integer> sort(int n, int[][] edges) {\n        List<List<Integer>> g = new ArrayList<>();\n        int[] indeg = new int[n];\n        for (int i = 0; i < n; i++) g.add(new ArrayList<>());\n        for (int[] e : edges) { g.get(e[0]).add(e[1]); indeg[e[1]]++; }\n        Queue<Integer> q = new LinkedList<>();\n        for (int i = 0; i < n; i++) if (indeg[i] == 0) q.add(i);\n        List<Integer> res = new ArrayList<>();\n        while (!q.isEmpty()) {\n            int u = q.poll(); res.add(u);\n            for (int v : g.get(u)) if (--indeg[v] == 0) q.add(v);\n        }\n        return res;\n    }\n}" },

            { "type": "heading", "content": "11. Dynamic Programming", "level": 2 },
            { "type": "paragraph", "content": "Dynamic Programming solves problems by breaking them into overlapping subproblems and storing results. Common forms include linear DP, grid DP, and knapsack-style DP." },
            { "type": "code", "language": "java", "content": "public class ClimbingStairs {\n    public static int climb(int n) {\n        if (n <= 2) return n;\n        int a = 1, b = 2;\n        for (int i = 3; i <= n; i++) {\n            int c = a + b; a = b; b = c;\n        }\n        return b;\n    }\n}" },

            { "type": "heading", "content": "Conclusion", "level": 2 },
            { "type": "paragraph", "content": "These core patterns represent the majority of real-world and interview DSA problems. Mastering them reduces problem-solving complexity dramatically. Focus on recognizing the pattern first—implementation naturally follows." }

        ]
    },
    {
        slug: "react-server-components-demystified",
        title: "React Server Components Demystified",
        excerpt: "Explore how React Server Components are revolutionizing the way we build React applications. Learn when to use RSC vs Client Components.",
        author: "Dinesh Sutihar",
        publishedAt: "2026-01-20",
        readingTime: 10,
        tags: ["React", "Next.js", "Server Components", "Frontend"],
        category: "React",
        coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200",
        seoDescription: "A deep dive into React Server Components (RSC), understanding the difference between server and client components, and best practices for Next.js apps.",
        keywords: ["react server components", "RSC", "next.js", "client components", "react 18", "streaming"],
        sections: [
            { type: "heading", content: "What Are React Server Components?", level: 2 },
            { type: "paragraph", content: "React Server Components (RSC) represent a paradigm shift in React development. They allow components to run exclusively on the server, never shipping JavaScript to the client. This results in smaller bundle sizes and better performance." },

            { type: "heading", content: "Server vs Client Components", level: 2 },
            { type: "paragraph", content: "Understanding when to use each type is crucial for building efficient applications:" },
            {
                type: "list", items: [
                    "Server Components: Data fetching, accessing backend resources, keeping sensitive data on server",
                    "Client Components: Interactivity (onClick, onChange), browser APIs, state management (useState, useEffect)",
                    "Default in Next.js App Router is Server Components",
                    "Add 'use client' directive to make a component a Client Component"
                ]
            },

            {
                type: "code", language: "tsx", content: `// Server Component (default in Next.js App Router)
// This runs ONLY on the server
async function BlogPosts() {
    // Direct database access - no API needed!
    const posts = await db.posts.findMany();
    
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}` },

            {
                type: "code", language: "tsx", content: `// Client Component - needs interactivity
"use client";

import { useState } from 'react';

export function LikeButton({ postId }: { postId: string }) {
    const [likes, setLikes] = useState(0);
    
    return (
        <button onClick={() => setLikes(l => l + 1)}>
            ❤️ {likes}
        </button>
    );
}` },

            { type: "heading", content: "The Rendering Flow", level: 2 },
            { type: "paragraph", content: "When a request comes in, Next.js renders Server Components on the server into a special format called RSC Payload. This payload contains the rendered result and placeholders for Client Components. Client Components are then hydrated on the browser." },

            { type: "heading", content: "Benefits of RSC", level: 2 },
            {
                type: "list", items: [
                    "Zero JavaScript for Server Components in the browser bundle",
                    "Direct access to backend resources (databases, file system)",
                    "Automatic code splitting at component level",
                    "Streaming and progressive rendering with Suspense",
                    "Better SEO with server-rendered content"
                ]
            },

            { type: "heading", content: "Best Practices", level: 2 },
            { type: "paragraph", content: "Follow these guidelines for optimal RSC usage:" },
            {
                type: "list", items: [
                    "Keep Client Components at the leaves of your component tree",
                    "Pass serializable props from Server to Client Components",
                    "Use 'use server' for Server Actions (form handling, mutations)",
                    "Leverage Suspense for loading states",
                    "Move interactivity to the smallest possible component"
                ]
            },

            { type: "quote", content: "The best component is one that doesn't ship any JavaScript to the client at all." },

            { type: "heading", content: "Conclusion", level: 2 },
            { type: "paragraph", content: "React Server Components are not just an optimization—they're a fundamental rethinking of how React applications can be built. By understanding the boundaries between server and client, you can build faster, more efficient applications that provide better user experiences." }
        ]
    },
    {
        slug: "understanding-react-hooks",
        title: "Understanding React Hooks: A Complete Guide",
        excerpt: "A deep dive into React Hooks and how to use them effectively. Master useState, useEffect, useMemo, useCallback, and create your own custom hooks.",
        author: "Dinesh Sutihar",
        publishedAt: "2026-01-25",
        readingTime: 15,
        tags: ["React", "Hooks", "JavaScript", "Frontend"],
        category: "React",
        coverImage: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200",
        seoDescription: "Complete guide to React Hooks covering useState, useEffect, useMemo, useCallback, useRef, useContext, and how to build custom hooks.",
        keywords: ["react hooks", "useState", "useEffect", "useMemo", "useCallback", "custom hooks", "react tutorial"],
        sections: [
            { type: "heading", content: "Introduction to Hooks", level: 2 },
            { type: "paragraph", content: "Hooks were introduced in React 16.8 to allow functional components to use state and lifecycle features. They provide a more elegant and reusable way to share logic between components compared to class components." },

            { type: "heading", content: "useState - Managing State", level: 2 },
            { type: "paragraph", content: "useState is the most fundamental hook. It allows you to add state to functional components. Each call to useState creates an independent piece of state." },
            {
                type: "code", language: "tsx", content: `import { useState } from 'react';

function Counter() {
    // Declare state variable with initial value
    const [count, setCount] = useState(0);
    
    // Functional update for state based on previous value
    const increment = () => setCount(prev => prev + 1);
    
    // Object state example
    const [user, setUser] = useState({ name: '', email: '' });
    
    const updateName = (name: string) => {
        setUser(prev => ({ ...prev, name }));
    };
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}` },

            { type: "heading", content: "useEffect - Side Effects", level: 2 },
            { type: "paragraph", content: "useEffect handles side effects like data fetching, subscriptions, and DOM manipulation. It runs after render and can optionally clean up before the next effect or unmount." },
            {
                type: "code", language: "tsx", content: `import { useState, useEffect } from 'react';

function UserProfile({ userId }: { userId: string }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Effect function
        async function fetchUser() {
            setLoading(true);
            const response = await fetch(\`/api/users/\${userId}\`);
            const data = await response.json();
            setUser(data);
            setLoading(false);
        }
        
        fetchUser();
        
        // Cleanup function (optional)
        return () => {
            // Cancel pending requests, unsubscribe, etc.
        };
    }, [userId]); // Dependency array - effect runs when userId changes
    
    if (loading) return <div>Loading...</div>;
    return <div>{user?.name}</div>;
}` },

            { type: "heading", content: "useMemo & useCallback - Optimization", level: 2 },
            { type: "paragraph", content: "These hooks help optimize performance by memoizing values and functions. Use them when you have expensive computations or when passing callbacks to child components." },
            {
                type: "code", language: "tsx", content: `import { useMemo, useCallback } from 'react';

function ExpensiveList({ items, filter }) {
    // Memoize expensive computation
    const filteredItems = useMemo(() => {
        console.log('Filtering items...');
        return items.filter(item => item.includes(filter));
    }, [items, filter]); // Only recompute when items or filter changes
    
    // Memoize callback function
    const handleClick = useCallback((id: string) => {
        console.log('Clicked:', id);
    }, []); // Empty deps = function never changes
    
    return (
        <ul>
            {filteredItems.map(item => (
                <ListItem key={item} onClick={handleClick} />
            ))}
        </ul>
    );
}` },

            { type: "heading", content: "useRef - Mutable References", level: 2 },
            { type: "paragraph", content: "useRef creates a mutable reference that persists across renders without causing re-renders when changed. Perfect for DOM references and storing previous values." },
            {
                type: "code", language: "tsx", content: `import { useRef, useEffect } from 'react';

function TextInput() {
    const inputRef = useRef<HTMLInputElement>(null);
    const renderCount = useRef(0);
    
    useEffect(() => {
        // Focus input on mount
        inputRef.current?.focus();
        renderCount.current += 1;
    });
    
    return (
        <div>
            <input ref={inputRef} type="text" />
            <p>Renders: {renderCount.current}</p>
        </div>
    );
}` },

            { type: "heading", content: "Custom Hooks - Reusable Logic", level: 2 },
            { type: "paragraph", content: "Custom hooks let you extract component logic into reusable functions. They must start with 'use' and can call other hooks." },
            {
                type: "code", language: "tsx", content: `// Custom hook for fetching data
function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    
    useEffect(() => {
        const controller = new AbortController();
        
        async function fetchData() {
            try {
                setLoading(true);
                const res = await fetch(url, { signal: controller.signal });
                const json = await res.json();
                setData(json);
            } catch (e) {
                if (e.name !== 'AbortError') setError(e);
            } finally {
                setLoading(false);
            }
        }
        
        fetchData();
        return () => controller.abort();
    }, [url]);
    
    return { data, loading, error };
}

// Usage
function Profile() {
    const { data, loading } = useFetch('/api/profile');
    if (loading) return <div>Loading...</div>;
    return <div>{data?.name}</div>;
}` },

            { type: "heading", content: "Rules of Hooks", level: 2 },
            {
                type: "list", items: [
                    "Only call hooks at the top level (not inside loops, conditions, or nested functions)",
                    "Only call hooks from React functions (components or custom hooks)",
                    "Custom hooks must start with 'use'",
                    "Hooks are called in the same order every render"
                ]
            },

            { type: "heading", content: "Conclusion", level: 2 },
            { type: "paragraph", content: "React Hooks have transformed how we write React applications. By understanding each hook's purpose and following best practices, you can write cleaner, more maintainable code. Start with useState and useEffect, then gradually incorporate optimization hooks as needed." }
        ]
    },
    {
        slug: "building-scalable-apis-nodejs",
        title: "Building Scalable APIs with Node.js",
        excerpt: "Learn backend architecture patterns for building robust, scalable REST APIs with Node.js and Express. Covers middleware, error handling, rate limiting, and more.",
        author: "Dinesh Sutihar",
        publishedAt: "2026-01-28",
        readingTime: 14,
        tags: ["Node.js", "Express", "API Design", "Backend"],
        category: "Backend",
        coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
        seoDescription: "Comprehensive guide to building scalable REST APIs with Node.js and Express, covering architecture patterns, middleware, authentication, and best practices.",
        keywords: ["node.js", "express", "rest api", "backend", "api design", "middleware", "authentication"],
        sections: [
            { type: "heading", content: "API Architecture Overview", level: 2 },
            { type: "paragraph", content: "Building a scalable API requires thoughtful architecture from the start. We'll use a layered architecture that separates concerns: Routes → Controllers → Services → Data Access." },

            { type: "heading", content: "Project Structure", level: 2 },
            {
                type: "code", language: "plaintext", content: `src/
├── controllers/    # Handle HTTP requests/responses
├── services/       # Business logic
├── models/         # Data models and schemas
├── middleware/     # Express middleware
├── routes/         # Route definitions
├── utils/          # Helper functions
├── config/         # Configuration
└── app.ts          # Express app setup` },

            { type: "heading", content: "Express App Configuration", level: 2 },
            {
                type: "code", language: "typescript", content: `import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { errorHandler } from './middleware/errorHandler';
import routes from './routes';

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({ origin: process.env.ALLOWED_ORIGINS?.split(',') }));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per window
    message: 'Too many requests, please try again later'
});
app.use('/api', limiter);

// Body parsing
app.use(express.json({ limit: '10kb' }));

// Routes
app.use('/api/v1', routes);

// Global error handler (must be last)
app.use(errorHandler);

export default app;` },

            { type: "heading", content: "Error Handling", level: 2 },
            { type: "paragraph", content: "Centralized error handling is crucial for maintainability. Create a custom error class and a global error handler middleware." },
            {
                type: "code", language: "typescript", content: `// Custom API Error class
class AppError extends Error {
    statusCode: number;
    isOperational: boolean;
    
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

// Error handler middleware
function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const message = err.isOperational ? err.message : 'Internal server error';
    
    // Log error for debugging
    console.error(\`[\${new Date().toISOString()}] \${err.stack}\`);
    
    res.status(statusCode).json({
        success: false,
        error: message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
}` },

            { type: "heading", content: "Authentication Middleware", level: 2 },
            {
                type: "code", language: "typescript", content: `import jwt from 'jsonwebtoken';

async function authenticate(req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            throw new AppError('Authentication required', 401);
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        next(new AppError('Invalid or expired token', 401));
    }
}

// Role-based authorization
function authorize(...roles: string[]) {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new AppError('Insufficient permissions', 403);
        }
        next();
    };
}` },

            { type: "heading", content: "Controller Pattern", level: 2 },
            {
                type: "code", language: "typescript", content: `// controllers/userController.ts
import { userService } from '../services/userService';

export const userController = {
    async getAll(req, res, next) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const users = await userService.findAll({ page, limit });
            
            res.json({
                success: true,
                data: users,
                pagination: { page, limit }
            });
        } catch (error) {
            next(error);
        }
    },
    
    async create(req, res, next) {
        try {
            const user = await userService.create(req.body);
            res.status(201).json({ success: true, data: user });
        } catch (error) {
            next(error);
        }
    }
};` },

            { type: "heading", content: "Validation with Zod", level: 2 },
            {
                type: "code", language: "typescript", content: `import { z } from 'zod';

const createUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(2).max(50)
});

function validate(schema) {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            throw new AppError(result.error.errors[0].message, 400);
        }
        req.body = result.data;
        next();
    };
}

// Usage in routes
router.post('/users', validate(createUserSchema), userController.create);` },

            { type: "heading", content: "Best Practices", level: 2 },
            {
                type: "list", items: [
                    "Use versioning in your API paths (/api/v1/)",
                    "Implement proper HTTP status codes",
                    "Add request/response logging with correlation IDs",
                    "Use environment variables for configuration",
                    "Implement graceful shutdown for production",
                    "Add health check endpoints",
                    "Document your API with OpenAPI/Swagger"
                ]
            },

            { type: "heading", content: "Conclusion", level: 2 },
            { type: "paragraph", content: "Building scalable APIs is about establishing solid patterns from the start. Focus on separation of concerns, consistent error handling, and security. As your application grows, this foundation will make it easier to maintain and extend." }
        ]
    },
    {
        slug: "mastering-typescript-generics",
        title: "Mastering TypeScript Generics",
        excerpt: "Advanced TypeScript techniques for writing flexible, reusable, and type-safe code. Learn generic functions, constraints, utility types, and real-world patterns.",
        author: "Dinesh Sutihar",
        publishedAt: "2026-01-30",
        readingTime: 11,
        tags: ["TypeScript", "JavaScript", "Programming", "Web Development"],
        category: "TypeScript",
        coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200",
        seoDescription: "Master TypeScript generics with practical examples covering generic functions, constraints, utility types, and advanced patterns for type-safe code.",
        keywords: ["typescript", "generics", "type safety", "utility types", "advanced typescript", "programming"],
        sections: [
            { type: "heading", content: "What Are Generics?", level: 2 },
            { type: "paragraph", content: "Generics allow you to write reusable code that works with multiple types while maintaining type safety. Instead of using 'any' or duplicating code for each type, generics let you create flexible, type-safe abstractions." },

            { type: "heading", content: "Basic Generic Syntax", level: 2 },
            {
                type: "code", language: "typescript", content: `// Generic function
function identity<T>(value: T): T {
    return value;
}

const num = identity<number>(42);     // T is number
const str = identity("hello");        // T inferred as string

// Generic interface
interface Box<T> {
    value: T;
    getValue(): T;
}

const numBox: Box<number> = {
    value: 42,
    getValue() { return this.value; }
};` },

            { type: "heading", content: "Generic Constraints", level: 2 },
            { type: "paragraph", content: "Constraints limit the types that can be used with a generic. Use 'extends' to specify requirements." },
            {
                type: "code", language: "typescript", content: `// Constraint: T must have a length property
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(item: T): number {
    console.log(item.length);
    return item.length;
}

logLength("hello");        // ✓ strings have length
logLength([1, 2, 3]);      // ✓ arrays have length
logLength({ length: 10 }); // ✓ object with length
// logLength(123);         // ✗ numbers don't have length

// Constraint with keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person = { name: "Alice", age: 30 };
getProperty(person, "name"); // ✓ returns string
getProperty(person, "age");  // ✓ returns number
// getProperty(person, "email"); // ✗ "email" not in person` },

            { type: "heading", content: "Multiple Type Parameters", level: 2 },
            {
                type: "code", language: "typescript", content: `// Tuple creation with two types
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const p = pair("hello", 42); // [string, number]

// Practical example: Map function
function mapArray<T, U>(arr: T[], fn: (item: T) => U): U[] {
    return arr.map(fn);
}

const nums = [1, 2, 3];
const strings = mapArray(nums, n => n.toString()); // string[]` },

            { type: "heading", content: "Generic Classes", level: 2 },
            {
                type: "code", language: "typescript", content: `class Stack<T> {
    private items: T[] = [];
    
    push(item: T): void {
        this.items.push(item);
    }
    
    pop(): T | undefined {
        return this.items.pop();
    }
    
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
    
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
const top = numberStack.pop(); // number | undefined` },

            { type: "heading", content: "Built-in Utility Types", level: 2 },
            { type: "paragraph", content: "TypeScript provides powerful utility types that leverage generics:" },
            {
                type: "code", language: "typescript", content: `interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

// Partial - all properties optional
type PartialUser = Partial<User>;

// Required - all properties required
type RequiredUser = Required<PartialUser>;

// Pick - select specific properties
type UserCredentials = Pick<User, 'email' | 'password'>;

// Omit - exclude specific properties
type PublicUser = Omit<User, 'password'>;

// Record - create object type with specific keys
type UserRoles = Record<string, 'admin' | 'user' | 'guest'>;

// ReturnType - extract return type of function
function getUser() { return { id: 1, name: 'Alice' }; }
type UserReturn = ReturnType<typeof getUser>;` },

            { type: "heading", content: "Conditional Types", level: 2 },
            {
                type: "code", language: "typescript", content: `// Basic conditional type
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false

// Practical: Extract array element type
type ElementType<T> = T extends (infer E)[] ? E : never;

type NumElement = ElementType<number[]>;  // number
type StrElement = ElementType<string[]>;  // string

// Exclude and Extract
type T1 = Exclude<'a' | 'b' | 'c', 'a'>;      // 'b' | 'c'
type T2 = Extract<'a' | 'b' | 'c', 'a' | 'f'>; // 'a'` },

            { type: "heading", content: "Real-World Pattern: API Response", level: 2 },
            {
                type: "code", language: "typescript", content: `// Generic API response wrapper
interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
    timestamp: Date;
}

interface PaginatedResponse<T> extends ApiResponse<T[]> {
    pagination: {
        page: number;
        limit: number;
        total: number;
    };
}

// Usage with async functions
async function fetchUser(id: string): Promise<ApiResponse<User>> {
    const res = await fetch(\`/api/users/\${id}\`);
    return res.json();
}

async function fetchUsers(): Promise<PaginatedResponse<User>> {
    const res = await fetch('/api/users');
    return res.json();
}` },

            { type: "heading", content: "Conclusion", level: 2 },
            { type: "paragraph", content: "Generics are essential for writing scalable TypeScript code. Start with simple generic functions, then gradually incorporate constraints and utility types. The key is finding the right balance between flexibility and type safety." }
        ]
    },
    {
        slug: "introduction-to-cicd-pipelines",
        title: "Introduction to CI/CD Pipelines",
        excerpt: "DevOps best practices for automating your build, test, and deployment workflows. Learn GitHub Actions, Docker integration, and deployment strategies.",
        author: "Dinesh Sutihar",
        publishedAt: "2026-02-01",
        readingTime: 13,
        tags: ["DevOps", "CI/CD", "GitHub Actions", "Docker"],
        category: "DevOps",
        coverImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200",
        seoDescription: "Learn CI/CD fundamentals with GitHub Actions including automated testing, Docker builds, and deployment strategies for modern development workflows.",
        keywords: ["ci/cd", "github actions", "devops", "docker", "automation", "deployment", "continuous integration"],
        sections: [
            { type: "heading", content: "What is CI/CD?", level: 2 },
            { type: "paragraph", content: "CI/CD stands for Continuous Integration and Continuous Deployment. CI automates building and testing code changes, while CD automates the deployment process. Together, they form a pipeline that ensures code changes are reliable and can be released quickly." },
            {
                type: "list", items: [
                    "Continuous Integration: Merge code frequently, run automated tests",
                    "Continuous Delivery: Keep code deployable at any time",
                    "Continuous Deployment: Automatically deploy every change that passes tests"
                ]
            },

            { type: "heading", content: "GitHub Actions Basics", level: 2 },
            { type: "paragraph", content: "GitHub Actions is a powerful CI/CD platform built into GitHub. Workflows are defined in YAML files in the .github/workflows directory." },
            {
                type: "code", language: "yaml", content: `# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run tests
        run: npm test
      
      - name: Build application
        run: npm run build` },

            { type: "heading", content: "Docker in CI/CD", level: 2 },
            { type: "paragraph", content: "Docker ensures consistent environments from development to production. Here's how to build and push Docker images in your pipeline:" },
            {
                type: "code", language: "yaml", content: `# Build and push Docker image
  build:
    needs: test
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_TOKEN }}
      
      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: |
            myapp:latest
            myapp:\${{ github.sha }}` },

            { type: "heading", content: "Sample Dockerfile", level: 2 },
            {
                type: "code", language: "dockerfile", content: `# Multi-stage build for smaller image
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000
CMD ["node", "dist/index.js"]` },

            { type: "heading", content: "Environment Management", level: 2 },
            {
                type: "code", language: "yaml", content: `# Deploy to different environments
  deploy-staging:
    needs: build
    runs-on: ubuntu-latest
    environment: staging
    
    steps:
      - name: Deploy to staging
        run: |
          echo "Deploying to staging..."
          # Add your deployment commands here
  
  deploy-production:
    needs: deploy-staging
    runs-on: ubuntu-latest
    environment: production
    if: github.ref == 'refs/heads/main'
    
    steps:
      - name: Deploy to production
        run: |
          echo "Deploying to production..."` },

            { type: "heading", content: "Deployment Strategies", level: 2 },
            {
                type: "list", items: [
                    "Rolling Update: Gradually replace old instances with new ones",
                    "Blue-Green: Run two identical environments, switch traffic instantly",
                    "Canary: Route small percentage of traffic to new version first",
                    "Feature Flags: Deploy code but enable features selectively"
                ]
            },

            { type: "heading", content: "Best Practices", level: 2 },
            {
                type: "list", items: [
                    "Keep pipelines fast - cache dependencies, parallelize jobs",
                    "Use branch protection rules to require passing checks",
                    "Store secrets securely using GitHub Secrets or vault",
                    "Version your Docker images with commit SHA",
                    "Implement rollback mechanisms for failed deployments",
                    "Monitor deployments and set up alerts",
                    "Document your pipeline in the repository"
                ]
            },

            { type: "quote", content: "If it hurts, do it more frequently, and bring the pain forward. - Continuous Delivery principle" },

            { type: "heading", content: "Conclusion", level: 2 },
            { type: "paragraph", content: "CI/CD pipelines are essential for modern software development. Start with a simple workflow that runs tests on every push, then gradually add build, security scanning, and deployment stages. The goal is to make releasing software boring - and that's a good thing." }
        ]
    }
];

// Helper function to get blog by slug
export function getBlogBySlug(slug: string): Blog | undefined {
    return blogs.find(blog => blog.slug === slug);
}

// Get all blog slugs for static generation
export function getAllBlogSlugs(): string[] {
    return blogs.map(blog => blog.slug);
}

// Get recent blogs (for home page)
export function getRecentBlogs(count: number = 3): Blog[] {
    return [...blogs]
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, count);
}

// Get blogs by category
export function getBlogsByCategory(category: string): Blog[] {
    return blogs.filter(blog => blog.category === category);
}

// Get all unique categories
export function getAllCategories(): string[] {
    return [...new Set(blogs.map(blog => blog.category))];
}

// Get all unique tags
export function getAllTags(): string[] {
    return [...new Set(blogs.flatMap(blog => blog.tags))];
}
