import React, { useState } from "react"
import { Link } from "gatsby"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  .nb-body { font-family: 'Inter', sans-serif; }
`

const inventory = [
  { item: "Corrugated Boxes 12x12", sku: "PKG-1001", category: "Packaging", stock: 842, reorder: 200, status: "In Stock" },
  { item: "Pallet Wrap 20in", sku: "PKG-1014", category: "Packaging", stock: 58, reorder: 100, status: "Low Stock" },
  { item: "Steel Shelving Unit", sku: "FIX-2003", category: "Fixtures", stock: 12, reorder: 10, status: "In Stock" },
  { item: "Forklift Battery 36V", sku: "EQP-3050", category: "Equipment", stock: 3, reorder: 5, status: "Low Stock" },
  { item: "Packing Tape (Case)", sku: "PKG-1022", category: "Packaging", stock: 0, reorder: 50, status: "Out of Stock" },
  { item: "Safety Vests, L", sku: "SFT-4010", category: "Safety", stock: 96, reorder: 30, status: "In Stock" },
  { item: "Barcode Scanner", sku: "EQP-3071", category: "Equipment", stock: 24, reorder: 8, status: "In Stock" },
  { item: "Hard Hats", sku: "SFT-4002", category: "Safety", stock: 41, reorder: 20, status: "In Stock" },
]

const orders = [
  { id: "PO-4821", type: "Incoming", partner: "Meridian Freight", status: "In Transit", date: "Jul 22" },
  { id: "SO-9102", type: "Outgoing", partner: "Coastal Retail Group", status: "Processing", date: "Jul 21" },
  { id: "PO-4819", type: "Incoming", partner: "Ashford Packaging", status: "Delivered", date: "Jul 19" },
  { id: "SO-9098", type: "Outgoing", partner: "Harbor Distribution", status: "Shipped", date: "Jul 19" },
  { id: "SO-9091", type: "Outgoing", partner: "Coastal Retail Group", status: "Delivered", date: "Jul 16" },
  { id: "PO-4810", type: "Incoming", partner: "Meridian Freight", status: "Delayed", date: "Jul 15" },
]

const weeklyMovement = [
  { day: "Mon", value: 62 },
  { day: "Tue", value: 78 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 90 },
  { day: "Fri", value: 71 },
  { day: "Sat", value: 30 },
  { day: "Sun", value: 12 },
]

const statusColor = (status) => {
  if (status === "Out of Stock" || status === "Delayed") return { bg: "#FEE2E2", text: "#B91C1C" }
  if (status === "Low Stock" || status === "Processing" || status === "In Transit") return { bg: "#FEF3C7", text: "#B45309" }
  if (status === "Delivered" || status === "In Stock") return { bg: "#DCFCE7", text: "#15803D" }
  return { bg: "#E2E8F0", text: "#334155" }
}

export default function NorthbayDashboard() {
  const [tab, setTab] = useState("Dashboard")
  const [search, setSearch] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [orderFilter, setOrderFilter] = useState("All")

  const tabs = ["Dashboard", "Inventory", "Orders", "Reports"]
  const categories = ["All", "Packaging", "Fixtures", "Equipment", "Safety"]
  const orderTypes = ["All", "Incoming", "Outgoing"]

  const filteredInventory = inventory.filter((i) => {
    const matchesSearch = i.item.toLowerCase().includes(search.toLowerCase()) || i.sku.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = categoryFilter === "All" || i.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const filteredOrders = orders.filter((o) => orderFilter === "All" || o.type === orderFilter)

  const lowStockCount = inventory.filter((i) => i.stock <= i.reorder).length
  const maxMovement = Math.max(...weeklyMovement.map((d) => d.value))

  return (
    <main className="nb-body" style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      <style>{fontImports}</style>

      <header className="flex items-center justify-between border-b px-6 py-4 sm:px-8" style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF" }}>
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-semibold"
            style={{ backgroundColor: "#2563EB", color: "#FFFFFF" }}
          >
            NB
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>Northbay Supply Co.</p>
            <p className="text-xs" style={{ color: "#94A3B8" }}>Warehouse Operations</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium"
            style={{ backgroundColor: "#E2E8F0", color: "#334155" }}
          >
            JD
          </div>
          <span className="hidden text-sm sm:inline" style={{ color: "#334155" }}>J. Delgado</span>
        </div>
      </header>

      <div className="flex gap-1 border-b px-6 sm:px-8" style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF" }}>
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className="nb-body border-b-2 px-4 py-3 text-sm font-medium"
            style={{
              borderColor: tab === t ? "#2563EB" : "transparent",
              color: tab === t ? "#2563EB" : "#64748B",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8">
        {tab === "Dashboard" && (
          <div>
            <h1 className="text-2xl font-semibold" style={{ color: "#0F172A" }}>Good morning, Jordan</h1>
            <p className="mt-1 text-sm" style={{ color: "#64748B" }}>Here's what's happening in the warehouse today.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-4">
              <div className="rounded-lg border p-4" style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF" }}>
                <p className="text-2xl font-semibold" style={{ color: "#0F172A" }}>{inventory.length}</p>
                <p className="mt-1 text-xs uppercase tracking-wide" style={{ color: "#94A3B8" }}>SKUs Tracked</p>
              </div>
              <div className="rounded-lg border p-4" style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF" }}>
                <p className="text-2xl font-semibold" style={{ color: "#B45309" }}>{lowStockCount}</p>
                <p className="mt-1 text-xs uppercase tracking-wide" style={{ color: "#94A3B8" }}>Low Stock Alerts</p>
              </div>
              <div className="rounded-lg border p-4" style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF" }}>
                <p className="text-2xl font-semibold" style={{ color: "#0F172A" }}>{orders.filter((o) => o.type === "Incoming").length}</p>
                <p className="mt-1 text-xs uppercase tracking-wide" style={{ color: "#94A3B8" }}>Incoming Shipments</p>
              </div>
              <div className="rounded-lg border p-4" style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF" }}>
                <p className="text-2xl font-semibold" style={{ color: "#0F172A" }}>{orders.filter((o) => o.type === "Outgoing").length}</p>
                <p className="mt-1 text-xs uppercase tracking-wide" style={{ color: "#94A3B8" }}>Outgoing Orders</p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border" style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF" }}>
              <p className="border-b px-5 py-3 text-sm font-medium" style={{ borderColor: "#E2E8F0", color: "#0F172A" }}>
                Recent Activity
              </p>
              <div className="divide-y" style={{ borderColor: "#E2E8F0" }}>
                {orders.slice(0, 4).map((o) => {
                  const c = statusColor(o.status)
                  return (
                    <div key={o.id} className="flex items-center justify-between px-5 py-3">
                      <div>
                        <p className="text-sm" style={{ color: "#0F172A" }}>{o.id} &middot; {o.partner}</p>
                        <p className="text-xs" style={{ color: "#94A3B8" }}>{o.type} &middot; {o.date}</p>
                      </div>
                      <span className="rounded-full px-2.5 py-1 text-xs font-medium" style={{ backgroundColor: c.bg, color: c.text }}>
                        {o.status}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {tab === "Inventory" && (
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-2xl font-semibold" style={{ color: "#0F172A" }}>Inventory</h1>
              <button
                type="button"
                className="rounded-md px-4 py-2 text-sm font-medium"
                style={{ backgroundColor: "#2563EB", color: "#FFFFFF" }}
              >
                + Add Item
              </button>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by item or SKU..."
                className="nb-body w-full max-w-xs rounded-md border px-3 py-2 text-sm outline-none sm:w-64"
                style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF", color: "#0F172A" }}
              />
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategoryFilter(c)}
                    className="rounded-full px-3 py-1.5 text-xs font-medium"
                    style={{
                      backgroundColor: categoryFilter === c ? "#0F172A" : "#E2E8F0",
                      color: categoryFilter === c ? "#FFFFFF" : "#334155",
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-lg border" style={{ borderColor: "#E2E8F0" }}>
              <div className="grid grid-cols-5 gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-wide" style={{ backgroundColor: "#F1F5F9", color: "#64748B" }}>
                <span>Item</span>
                <span>SKU</span>
                <span>Category</span>
                <span>Stock</span>
                <span>Status</span>
              </div>
              <div className="divide-y" style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF" }}>
                {filteredInventory.map((i) => {
                  const c = statusColor(i.status)
                  return (
                    <div key={i.sku} className="grid grid-cols-5 items-center gap-2 px-5 py-3 text-sm">
                      <span style={{ color: "#0F172A" }}>{i.item}</span>
                      <span style={{ color: "#94A3B8" }}>{i.sku}</span>
                      <span style={{ color: "#334155" }}>{i.category}</span>
                      <span style={{ color: "#0F172A" }}>{i.stock}</span>
                      <span className="w-fit rounded-full px-2.5 py-1 text-xs font-medium" style={{ backgroundColor: c.bg, color: c.text }}>
                        {i.status}
                      </span>
                    </div>
                  )
                })}
                {filteredInventory.length === 0 && (
                  <p className="px-5 py-6 text-center text-sm" style={{ color: "#94A3B8" }}>No items match your search.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {tab === "Orders" && (
          <div>
            <h1 className="text-2xl font-semibold" style={{ color: "#0F172A" }}>Orders &amp; Shipments</h1>
            <div className="mt-5 flex gap-2">
              {orderTypes.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setOrderFilter(t)}
                  className="rounded-full px-4 py-1.5 text-xs font-medium"
                  style={{
                    backgroundColor: orderFilter === t ? "#0F172A" : "#E2E8F0",
                    color: orderFilter === t ? "#FFFFFF" : "#334155",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-5 overflow-hidden rounded-lg border" style={{ borderColor: "#E2E8F0" }}>
              <div className="grid grid-cols-5 gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-wide" style={{ backgroundColor: "#F1F5F9", color: "#64748B" }}>
                <span>Order</span>
                <span>Type</span>
                <span>Partner</span>
                <span>Status</span>
                <span>Date</span>
              </div>
              <div className="divide-y" style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF" }}>
                {filteredOrders.map((o) => {
                  const c = statusColor(o.status)
                  return (
                    <div key={o.id} className="grid grid-cols-5 items-center gap-2 px-5 py-3 text-sm">
                      <span style={{ color: "#0F172A" }}>{o.id}</span>
                      <span style={{ color: "#334155" }}>{o.type}</span>
                      <span style={{ color: "#334155" }}>{o.partner}</span>
                      <span className="w-fit rounded-full px-2.5 py-1 text-xs font-medium" style={{ backgroundColor: c.bg, color: c.text }}>
                        {o.status}
                      </span>
                      <span style={{ color: "#94A3B8" }}>{o.date}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {tab === "Reports" && (
          <div>
            <h1 className="text-2xl font-semibold" style={{ color: "#0F172A" }}>Reports</h1>

            <div className="mt-6 rounded-lg border p-6" style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF" }}>
              <p className="text-sm font-medium" style={{ color: "#0F172A" }}>Weekly Stock Movement</p>
              <div className="mt-6 flex h-40 items-end gap-3">
                {weeklyMovement.map((d) => (
                  <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-sm"
                      style={{ height: `${(d.value / maxMovement) * 100}%`, backgroundColor: "#2563EB" }}
                    />
                    <span className="text-xs" style={{ color: "#94A3B8" }}>{d.day}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-lg border" style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF" }}>
              <p className="border-b px-5 py-3 text-sm font-medium" style={{ borderColor: "#E2E8F0", color: "#0F172A" }}>
                Low Stock Alerts
              </p>
              <div className="divide-y" style={{ borderColor: "#E2E8F0" }}>
                {inventory.filter((i) => i.stock <= i.reorder).map((i) => (
                  <div key={i.sku} className="flex items-center justify-between px-5 py-3 text-sm">
                    <span style={{ color: "#0F172A" }}>{i.item}</span>
                    <span style={{ color: "#B45309" }}>{i.stock} left &middot; reorder at {i.reorder}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="border-t px-6 py-8 text-center sm:px-8" style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF" }}>
        <Link
          to="/portfolio"
          className="nb-body text-xs uppercase tracking-[0.1em] underline"
          style={{ color: "#64748B" }}
        >
          ← Back to Ash Studio Portfolio
        </Link>
      </footer>
    </main>
  )
}

export function Head() {
  return <title>Northbay Supply Co. | Warehouse Dashboard</title>
}