import Layout from "@/components/layout/Layout";
import BookingForm from "@/components/booking/BookingForm";
import { site } from "@/config/site";

const Book = () => (
  <Layout>
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <p className="subheading mb-4">Booking</p>
        <h1 className="font-serif text-4xl md:text-5xl text-secondary">Book your treatments</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Select one treatment or several, tell us where in {site.city} you are, and we confirm
          everything on WhatsApp. All bookings need at least 24 hours' notice.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <BookingForm />
      </div>
    </section>
  </Layout>
);

export default Book;
