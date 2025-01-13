import BreadCrum from "@/components/BreadCrum";
import Category from "@/components/Category";
import FeaturePost from "@/components/FeaturePost";
import Introduction from "@/components/Introduction";
import RecentPost from "@/components/RecentPost";

export default function Home() {
  return (
    <div className="">
      <BreadCrum />

      {/* navbar */}

      {/* breadcrum */}
      {/* introduction */}
      <Introduction />
      <Category />
      <FeaturePost />
      <RecentPost />
      {/* feature post */}
    </div>
  );
}
