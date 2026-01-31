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
    sections: ContentSection[];
}

export const blogs: Blog[] = [
    {
        slug: "patterns-in-data-structures",
        title: "Patterns in Data Structures: A Comprehensive Guide",
        excerpt: "Master the essential patterns that appear repeatedly in coding interviews and real-world applications. From two-pointer techniques to dynamic programming.",
        author: "Dinesh Sutihar",
        publishedAt: "2026-01-15",
        readingTime: 12,
        tags: ["DSA", "Algorithms", "Interview Prep", "Problem Solving"],
        category: "Data Structures",
        coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200",
        seoDescription: "Learn essential data structure patterns including two-pointer, sliding window, BFS/DFS, and dynamic programming techniques used in coding interviews.",
        keywords: ["data structures", "algorithms", "two pointer", "sliding window", "dynamic programming", "coding interview"],
        sections: [
            { type: "heading", content: "Introduction", level: 2 },
            { type: "paragraph", content: "Data structures and algorithms form the backbone of computer science. Understanding common patterns can transform how you approach problems. Instead of solving each problem from scratch, recognizing patterns allows you to apply proven strategies efficiently." },
            
            { type: "heading", content: "1. Two-Pointer Technique", level: 2 },
            { type: "paragraph", content: "The two-pointer technique uses two pointers to traverse a data structure, typically an array or linked list. This pattern is particularly useful for problems involving pairs, finding subarrays, or when you need to compare elements at different positions." },
            { type: "code", language: "typescript", content: `// Example: Find if array has pair with given sum
function hasPairWithSum(arr: number[], target: number): boolean {
    let left = 0;
    let right = arr.length - 1;
    
    // Array must be sorted
    arr.sort((a, b) => a - b);
    
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) return true;
        if (sum < target) left++;
        else right--;
    }
    return false;
}` },
            { type: "paragraph", content: "Time Complexity: O(n log n) due to sorting. The two-pointer traversal itself is O(n)." },

            { type: "heading", content: "2. Sliding Window", level: 2 },
            { type: "paragraph", content: "Sliding window is used when you need to find subarrays or substrings that satisfy certain conditions. The window expands or contracts based on the problem requirements." },
            { type: "code", language: "typescript", content: `// Maximum sum subarray of size k
function maxSumSubarray(arr: number[], k: number): number {
    if (arr.length < k) return -1;
    
    let windowSum = 0;
    let maxSum = 0;
    
    // Calculate first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}` },
            
            { type: "heading", content: "3. BFS and DFS Traversal", level: 2 },
            { type: "paragraph", content: "Breadth-First Search (BFS) and Depth-First Search (DFS) are fundamental graph traversal algorithms. BFS explores level by level, while DFS goes as deep as possible before backtracking." },
            { type: "list", items: [
                "BFS: Best for finding shortest path in unweighted graphs",
                "DFS: Ideal for exploring all paths, detecting cycles, topological sorting",
                "BFS uses a queue, DFS uses a stack (or recursion)",
                "Both have O(V + E) time complexity"
            ]},
            { type: "code", language: "typescript", content: `// BFS Implementation
function bfs(graph: Map<number, number[]>, start: number): number[] {
    const visited = new Set<number>();
    const queue: number[] = [start];
    const result: number[] = [];
    
    while (queue.length > 0) {
        const node = queue.shift()!;
        if (visited.has(node)) continue;
        
        visited.add(node);
        result.push(node);
        
        for (const neighbor of graph.get(node) || []) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
            }
        }
    }
    return result;
}` },

            { type: "heading", content: "4. Dynamic Programming", level: 2 },
            { type: "paragraph", content: "Dynamic Programming (DP) solves complex problems by breaking them into overlapping subproblems. The key is identifying the state and transition function." },
            { type: "quote", content: "Those who cannot remember the past are condemned to repeat it. - George Santayana (the essence of memoization)" },
            { type: "code", language: "typescript", content: `// Classic: Fibonacci with memoization
function fibonacci(n: number, memo: Map<number, number> = new Map()): number {
    if (n <= 1) return n;
    if (memo.has(n)) return memo.get(n)!;
    
    const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    memo.set(n, result);
    return result;
}

// Bottom-up approach
function fibonacciDP(n: number): number {
    if (n <= 1) return n;
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}` },

            { type: "heading", content: "Conclusion", level: 2 },
            { type: "paragraph", content: "Mastering these patterns takes practice. Start by identifying which pattern applies to a problem, then adapt the general template to the specific requirements. With time, pattern recognition becomes intuitive, making you a more efficient problem solver." }
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
            { type: "list", items: [
                "Server Components: Data fetching, accessing backend resources, keeping sensitive data on server",
                "Client Components: Interactivity (onClick, onChange), browser APIs, state management (useState, useEffect)",
                "Default in Next.js App Router is Server Components",
                "Add 'use client' directive to make a component a Client Component"
            ]},
            
            { type: "code", language: "tsx", content: `// Server Component (default in Next.js App Router)
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

            { type: "code", language: "tsx", content: `// Client Component - needs interactivity
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
            { type: "list", items: [
                "Zero JavaScript for Server Components in the browser bundle",
                "Direct access to backend resources (databases, file system)",
                "Automatic code splitting at component level",
                "Streaming and progressive rendering with Suspense",
                "Better SEO with server-rendered content"
            ]},

            { type: "heading", content: "Best Practices", level: 2 },
            { type: "paragraph", content: "Follow these guidelines for optimal RSC usage:" },
            { type: "list", items: [
                "Keep Client Components at the leaves of your component tree",
                "Pass serializable props from Server to Client Components",
                "Use 'use server' for Server Actions (form handling, mutations)",
                "Leverage Suspense for loading states",
                "Move interactivity to the smallest possible component"
            ]},

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
            { type: "code", language: "tsx", content: `import { useState } from 'react';

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
            { type: "code", language: "tsx", content: `import { useState, useEffect } from 'react';

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
            { type: "code", language: "tsx", content: `import { useMemo, useCallback } from 'react';

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
            { type: "code", language: "tsx", content: `import { useRef, useEffect } from 'react';

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
            { type: "code", language: "tsx", content: `// Custom hook for fetching data
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
            { type: "list", items: [
                "Only call hooks at the top level (not inside loops, conditions, or nested functions)",
                "Only call hooks from React functions (components or custom hooks)",
                "Custom hooks must start with 'use'",
                "Hooks are called in the same order every render"
            ]},

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
            { type: "code", language: "plaintext", content: `src/
├── controllers/    # Handle HTTP requests/responses
├── services/       # Business logic
├── models/         # Data models and schemas
├── middleware/     # Express middleware
├── routes/         # Route definitions
├── utils/          # Helper functions
├── config/         # Configuration
└── app.ts          # Express app setup` },

            { type: "heading", content: "Express App Configuration", level: 2 },
            { type: "code", language: "typescript", content: `import express from 'express';
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
            { type: "code", language: "typescript", content: `// Custom API Error class
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
            { type: "code", language: "typescript", content: `import jwt from 'jsonwebtoken';

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
            { type: "code", language: "typescript", content: `// controllers/userController.ts
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
            { type: "code", language: "typescript", content: `import { z } from 'zod';

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
            { type: "list", items: [
                "Use versioning in your API paths (/api/v1/)",
                "Implement proper HTTP status codes",
                "Add request/response logging with correlation IDs",
                "Use environment variables for configuration",
                "Implement graceful shutdown for production",
                "Add health check endpoints",
                "Document your API with OpenAPI/Swagger"
            ]},

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
            { type: "code", language: "typescript", content: `// Generic function
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
            { type: "code", language: "typescript", content: `// Constraint: T must have a length property
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
            { type: "code", language: "typescript", content: `// Tuple creation with two types
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
            { type: "code", language: "typescript", content: `class Stack<T> {
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
            { type: "code", language: "typescript", content: `interface User {
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
            { type: "code", language: "typescript", content: `// Basic conditional type
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
            { type: "code", language: "typescript", content: `// Generic API response wrapper
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
            { type: "list", items: [
                "Continuous Integration: Merge code frequently, run automated tests",
                "Continuous Delivery: Keep code deployable at any time",
                "Continuous Deployment: Automatically deploy every change that passes tests"
            ]},

            { type: "heading", content: "GitHub Actions Basics", level: 2 },
            { type: "paragraph", content: "GitHub Actions is a powerful CI/CD platform built into GitHub. Workflows are defined in YAML files in the .github/workflows directory." },
            { type: "code", language: "yaml", content: `# .github/workflows/ci.yml
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
            { type: "code", language: "yaml", content: `# Build and push Docker image
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
            { type: "code", language: "dockerfile", content: `# Multi-stage build for smaller image
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
            { type: "code", language: "yaml", content: `# Deploy to different environments
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
            { type: "list", items: [
                "Rolling Update: Gradually replace old instances with new ones",
                "Blue-Green: Run two identical environments, switch traffic instantly",
                "Canary: Route small percentage of traffic to new version first",
                "Feature Flags: Deploy code but enable features selectively"
            ]},

            { type: "heading", content: "Best Practices", level: 2 },
            { type: "list", items: [
                "Keep pipelines fast - cache dependencies, parallelize jobs",
                "Use branch protection rules to require passing checks",
                "Store secrets securely using GitHub Secrets or vault",
                "Version your Docker images with commit SHA",
                "Implement rollback mechanisms for failed deployments",
                "Monitor deployments and set up alerts",
                "Document your pipeline in the repository"
            ]},

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
