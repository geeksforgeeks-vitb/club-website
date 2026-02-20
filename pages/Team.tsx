import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { LEADERSHIP, TEAMS } from '../constants';

const TeamCard: React.FC<{ member: any, isLarge?: boolean }> = ({ member, isLarge = false }) => (
    <div className="group relative glass rounded-xl p-1 hover:border-primary/40 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
        <div className="bg-surface/40 rounded-lg p-6 h-full flex flex-col items-center text-center relative z-10">
            <div className={`relative ${isLarge ? 'w-32 h-32' : 'w-24 h-24'} mb-4 rounded-full p-1 border border-surface-border group-hover:border-primary/50 transition-colors`}>
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top rounded-full
                               filter grayscale group-hover:grayscale-0
                               transition-all duration-500"
                    loading="lazy"
                    decoding="async"
                />

            </div>
            <h3 className={`${isLarge ? 'text-lg' : 'text-base'} font-bold text-white mb-1`}>{member.name}</h3>
            <p className="text-primary text-xs font-medium mb-3">{member.role}</p>

            {isLarge && (
                <div className="mt-auto flex gap-3">
                    {member.socials?.email && (
                        <a
                            href={`mailto:${member.socials.email}`}
                            className="text-gray-500 hover:text-white transition-colors"
                        >
                            <Mail size={16} />
                        </a>
                    )}
                    {member.socials?.github && (
                        <a
                            href={member.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white transition-colors"
                        >
                            <Github size={16} />
                        </a>
                    )}
                    {member.socials?.linkedin && (
                        <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[#0077b5] transition-colors"
                        >
                            <Linkedin size={16} />
                        </a>
                    )}
                </div>
            )}
        </div>
    </div>
);

const Team: React.FC = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        <span>2025-2026 Core Committee</span>
                    </div>
                    <h1 className="text-5xl font-bold tracking-tight text-white mb-6">Meet the Architects</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        The passionate minds building the coding culture at VIT Bhopal. We are a collective of developers, designers, and innovators.
                    </p>
                </div>

                {/* Leadership Section */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-2xl font-semibold text-white tracking-tight">Chapter Leadership</h2>
                        <div className="h-px bg-surface-border flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                        {LEADERSHIP.map((member) => (
                            <TeamCard key={member.id} member={member} isLarge={true} />
                        ))}
                    </div>
                </section>

                {/* Domains */}
                {TEAMS.map((team, idx) => (
                    <section key={idx} className="mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-xl font-semibold text-white tracking-tight">{team.name}</h2>
                            <div className="h-px bg-surface-border flex-grow"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {/* Lead Card */}
                            <div className="md:col-span-1">
                                <div className="h-full border border-primary/20 bg-primary/5 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                                    <img
                                        src={team.lead.image}
                                        alt={team.lead.name}
                                        className="w-20 h-20 rounded-full object-cover object-top
                                                   mb-4 border-2 border-primary/30"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <h3 className="text-white font-bold">{team.lead.name}</h3>
                                    <p className="text-primary text-xs font-mono mt-1 mb-3 uppercase">{team.lead.role}</p>

                                    <div className="flex gap-2 justify-center">
                                        {team.lead.socials?.email && (
                                            <a href={`mailto:${team.lead.socials.email}`} className="text-gray-500 hover:text-white transition-colors">
                                                <Mail size={14} />
                                            </a>
                                        )}
                                        {team.lead.socials?.github && (
                                            <a href={team.lead.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                                <Github size={14} />
                                            </a>
                                        )}
                                        {team.lead.socials?.linkedin && (
                                            <a href={team.lead.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0077b5] transition-colors">
                                                <Linkedin size={14} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Members Grid */}
                            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {team.members.map((member) => (
                                    <div key={member.id} className="bg-surface rounded-lg p-4 border border-white/5 hover:border-white/10 transition-colors flex flex-col items-center text-center">
                                        <div className="w-12 h-12 rounded-full overflow-hidden mb-3 bg-black">

                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover opacity-80" loading="lazy" decoding="async" />
                                        </div>
                                        <h4 className="text-sm font-medium text-gray-200">{member.name}</h4>
                                        <p className="text-xs text-gray-500 mt-1 mb-2">{member.role}</p>
                                        <div className="flex gap-2 justify-center mt-auto">
                                            {member.socials?.email && (
                                                <a href={`mailto:${member.socials.email}`} className="text-gray-600 hover:text-white transition-colors" title="Email">
                                                    <Mail size={12} />
                                                </a>
                                            )}
                                            {member.socials?.github && (
                                                <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors" title="GitHub">
                                                    <Github size={12} />
                                                </a>
                                            )}
                                            {member.socials?.linkedin && (
                                                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0077b5] transition-colors" title="LinkedIn">
                                                    <Linkedin size={12} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}

            </div>
        </div>
    );
};

export default Team;
