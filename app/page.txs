id} className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-xs text-indigo-400 font-semibold">{item.book_title}</span>
                  <p className="mt-1 text-slate-300">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Rejalar va Kalendar</h2>
            <p className="text-slate-400">Kunlik rejalaringizni belgilang.</p>
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="max-w-3xl mx-auto h-full flex flex-col justify-between">
            <h2 className="text-2xl font-bold mb-4">AI Brain Chat</h2>
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
              {chatLog.map((msg, i) => (
                <div key={i} className={`p-3 rounded-lg max-w-[80%] ${msg.role === 'user' ? 'bg-indigo-600 ml-auto' : 'bg-slate-800'}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Bazada saqlangan qaydlar bo'yicha savol bering..." value={chatInput} onChange={(e) => setChatInput(e.target.value)} className="bg-slate-900 border border-slate-800 p-3 flex-1 rounded-xl outline-none" />
              <button onClick={askAI} className="bg-indigo-600 hover:bg-indigo-500 px-6 rounded-xl font-medium">Yuborish</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
