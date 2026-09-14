import React from 'react';

function TeamCard({ member }) {
  return (
    <div className="group flex flex-col items-center bg-white p-4 transition-all duration-300">
      
      <div className="group relative overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
        />

        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/60 flex flex-col items-center justify-center text-white 
                opacity-0 translate-y-full 
                transition-all duration-500 ease-in-out 
                group-hover:opacity-100 group-hover:translate-y-0">
    <h4 className="text-2xl font-serif mb-1">{member.name}</h4>
    <p className="text-sm font-light">{member.title}</p>
</div>
      </div>

      <div className="text-center pt-6 border border-t-0 border-gray-400">
        <p className="text-gray-500 text-sm leading-relaxed mb-6 px-4">
          {member.des}
        </p>

        <div className="flex justify-center gap-2 pb-6">
          {member.socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="w-10 h-10 text-xs flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            >
              <i className={`fab ${social.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;