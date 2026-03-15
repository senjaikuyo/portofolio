interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center px-3.5 py-1.5 text-xs font-medium rounded-full bg-white/[0.04] text-gray-300 border border-white/[0.06] hover:border-cyan-400/30 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300 cursor-default">
      {name}
    </span>
  );
}
