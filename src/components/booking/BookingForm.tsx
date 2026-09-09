import { useMemo, useState } from "react";
import { Check, MessageCircle, CalendarClock } from "lucide-react";
import { services, serviceCategories } from "@/data/services";
import { site, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

/** Earliest date a booking can be made: 24 hours from now. */
const earliestDate = () => {
  const d = new Date(Date.now() + 24 * 60 * 60 * 1000);
  return d.toISOString().slice(0, 10);
};

const BookingForm = () => {
  const minDate = useMemo(earliestDate, []);
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [locationType, setLocationType] = useState(site.locationTypes[0]);
  const [area, setArea] = useState(site.areas[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const toggle = (slug: string) =>
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );

  const chosen = services.filter((s) => selected.includes(s.slug));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return setError("Please add your name and phone number.");
    if (chosen.length === 0) return setError("Please choose at least one treatment.");
    if (!date) return setError("Please choose a date at least 24 hours from now.");
    if (date < minDate) return setError("Bookings need at least 24 hours' notice.");
    setError("");

    const message = [
      `Hello ${site.name}, I would like to book a treatment.`,
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Treatments: ${chosen.map((s) => s.name).join(", ")}`,
      `Where: ${locationType}, ${area}`,
      `Preferred date: ${date}${time ? ` at ${time}` : ""}`,
      notes.trim() ? `Notes: ${notes.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
        <CalendarClock size={18} className="mt-0.5 text-primary flex-shrink-0" />
        <p>
          All treatments must be booked <strong>at least 24 hours in advance</strong> so we can
          confirm your therapist, travel time and set-up.
        </p>
      </div>

      <div>
        <h3 className="font-serif text-2xl mb-2">1. Choose your treatments</h3>
        <p className="text-sm text-muted-foreground mb-6">
          You can pick as many as you like — we plan them into one visit.
        </p>

        <div className="space-y-8">
          {serviceCategories.map((category) => (
            <div key={category.name}>
              <p className="subheading mb-3">{category.name}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services
                  .filter((s) => s.category === category.name)
                  .map((service) => {
                    const active = selected.includes(service.slug);
                    return (
                      <button
                        type="button"
                        key={service.slug}
                        onClick={() => toggle(service.slug)}
                        aria-pressed={active}
                        className={cn(
                          "flex items-start gap-3 text-left rounded-lg border p-4 transition-all",
                          active
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50",
                        )}
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border",
                            active ? "bg-primary border-primary text-primary-foreground" : "border-border",
                          )}
                        >
                          {active && <Check size={14} />}
                        </span>
                        <span>
                          <span className="block text-sm font-medium">{service.name}</span>
                          <span className="block text-xs text-muted-foreground">
                            {service.duration}
                          </span>
                        </span>
                      </button>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        {chosen.length > 0 && (
          <p className="mt-6 text-sm text-muted-foreground">
            Selected: {chosen.map((s) => s.name).join(", ")}
          </p>
        )}
      </div>

      <div>
        <h3 className="font-serif text-2xl mb-6">2. Your details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block text-sm">
            <span className="block mb-2">Your name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={80}
              required
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm"
            />
          </label>
          <label className="block text-sm">
            <span className="block mb-2">Phone number</span>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={20}
              required
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm"
            />
          </label>
          <label className="block text-sm">
            <span className="block mb-2">Where should we come?</span>
            <select
              value={locationType}
              onChange={(e) => setLocationType(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm"
            >
              {site.locationTypes.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="block mb-2">Area in {site.city}</span>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm"
            >
              {site.areas.map((a) => (
                <option key={a}>{a}</option>
              ))}
              <option>Another area</option>
            </select>
          </label>
          <label className="block text-sm">
            <span className="block mb-2">Preferred date (24 hours' notice)</span>
            <input
              type="date"
              min={minDate}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm"
            />
          </label>
          <label className="block text-sm">
            <span className="block mb-2">Preferred time</span>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm"
            />
          </label>
          <label className="block text-sm sm:col-span-2">
            <span className="block mb-2">Anything else we should know?</span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              maxLength={600}
              rows={4}
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm"
            />
          </label>
        </div>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="space-y-3">
        <button type="submit" className="btn-luxury inline-flex items-center gap-2">
          <MessageCircle size={16} />
          Send booking request on WhatsApp
        </button>
        <p className="text-xs text-muted-foreground">
          Your request opens in WhatsApp so we can confirm the time and final price with you.
        </p>
      </div>
    </form>
  );
};

export default BookingForm;
