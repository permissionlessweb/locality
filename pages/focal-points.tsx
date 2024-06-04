import Image from "next/image"
import Link from "next/link"
import {
    File,
    Home,
    LineChart,
    ListFilter,
    MoreHorizontal,
    Package,
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Upload,
    Users2,
} from "lucide-react"
import { Label } from "@/components/common/label"

import { Badge } from "@/components/common/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/common/breadcrumb"
import { Button } from "@/components/common/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/common/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/common/dropdown-menu"
import { Input } from "@/components/common/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/common/sheet"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/common/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/common/tabs"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/common/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/common/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/common/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/common/toggle-group"
import { Textarea } from "@/components/common/textarea"

export default function Dashboard() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                    <Link
                        href="#"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Home className="h-5 w-5" />
                                    <span className="sr-only">Dashboard</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Dashboard</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    <span className="sr-only">Orders</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Orders</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Package className="h-5 w-5" />
                                    <span className="sr-only">Products</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Products</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Users2 className="h-5 w-5" />
                                    <span className="sr-only">Customers</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Customers</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <LineChart className="h-5 w-5" />
                                    <span className="sr-only">Analytics</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Analytics</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Settings className="h-5 w-5" />
                                    <span className="sr-only">Settings</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Settings</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">

                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <Tabs defaultValue="all">
                        <div className="flex items-center">
                            <TabsList>
                                <TabsTrigger value="all">All</TabsTrigger>
                                <TabsTrigger value="active">Active</TabsTrigger>
                                <TabsTrigger value="draft">Inbound</TabsTrigger>
                                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                                <TabsTrigger value="archived" className="hidden sm:flex">
                                    Archived
                                </TabsTrigger>
                            </TabsList>
                            <div className="ml-auto flex items-center gap-2">
                                <Button size="sm" className="h-8 gap-1">
                                    <PlusCircle className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        New Focal Point
                                    </span>
                                </Button>
                            </div>
                        </div>
                        <TabsContent value="all">
                            <Card x-chunk="dashboard-06-chunk-0">
                                <CardHeader>
                                    <CardTitle>Focal Points</CardTitle>
                                    <CardDescription>
                                        View upcoming focal points, register as an artist.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="hidden w-[100px] sm:table-cell">
                                                    <span className="sr-only">Image</span>
                                                </TableHead>
                                                <TableHead>Name</TableHead>
                                                <TableHead className="hidden md:table-cell">
                                                    Focal Point
                                                </TableHead>
                                                <TableHead className="hidden md:table-cell">
                                                    Feature
                                                </TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead className="hidden md:table-cell">
                                                    Next Deadline in
                                                </TableHead>
                                                <TableHead>
                                                    <span className="sr-only">Actions</span>
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        {/* <Popover> */}
                                        {/* <PopoverContent className="fixed-center w-80">
                                                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">

                                                    <Card x-chunk="dashboard-07-chunk-0">
                                                        <CardHeader>
                                                            <CardTitle>Collection Description </CardTitle>
                                                            <CardDescription>
                                                                Lipsum dolor sit amet, consectetur adipiscing elit
                                                            </CardDescription>
                                                        </CardHeader>
                                                        <CardContent>
                                                            <div className="grid gap-6">
                                                                <div className="grid gap-3">
                                                                    <Label htmlFor="name">Name</Label>
                                                                    <Input
                                                                        id="name"
                                                                        type="text"
                                                                        className="w-full"
                                                                        defaultValue="Gamer Gear Pro Controller"
                                                                    />
                                                                </div>
                                                                <div className="grid gap-3">
                                                                    <Label htmlFor="description">Description</Label>
                                                                    <Textarea
                                                                        id="description"
                                                                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                                                                        className="min-h-32"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                    </Card>

                                                </div>
                                            </PopoverContent> */}
                                        {/* <PopoverTrigger> */}
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Image
                                                        alt=""
                                                        className="aspect-square rounded-md object-cover"
                                                        height="64"
                                                        src="/placeholder.svg"
                                                        width="64"
                                                    />
                                                </TableCell>
                                                <TableCell className="font-medium">
                                                    Locality NFT: Genesis Collection
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    <Badge variant="outline">preventative</Badge>
                                                    {/* <Badge variant="outline">relaxation</Badge> */}
                                                    {/* <Badge variant="outline">treatment</Badge> */}
                                                    {/* <Badge variant="outline">recovery</Badge> */}
                                                    {/* <Badge variant="outline">preventitive</Badge> */}
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    -
                                                    {/* <Badge variant="outline">raffle</Badge> */}
                                                    {/* <Badge variant="outline">auction</Badge> */}
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="outline">join</Badge>
                                                    {/* <Badge variant="outline">upcoming</Badge> */}
                                                    {/* <Badge variant="outline">started</Badge> */}
                                                    {/* <Badge variant="outline">ended</Badge> */}
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-07-12 10:42 AM
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button
                                                                aria-haspopup="true"
                                                                size="icon"
                                                                variant="ghost"
                                                            >
                                                                <MoreHorizontal className="h-4 w-4" />
                                                                <span className="sr-only">Toggle menu</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>


                                        </TableBody>
                                        {/* </PopoverTrigger> */}
                                        {/* </Popover> */}
                                    </Table>
                                </CardContent>
                                <CardFooter>
                                    <div className="text-xs text-muted-foreground">
                                        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                                        products
                                    </div>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    )
}