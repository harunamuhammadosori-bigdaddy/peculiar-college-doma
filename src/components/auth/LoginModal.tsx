import React, { useState } from 'react';
import { User, UserRole } from '../../types';
import { SchoolLogo } from '../SchoolLogo';
import { X, Lock, Mail, AlertCircle, ArrowRight, ShieldCheck, KeyRound, HelpCircle } from 'lucide-react';
import { ApiClient } from '../../services/apiClient';
import { ForgotPasswordModal } from './ForgotPasswordModal';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: User, token: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data = await ApiClient.login(email, password);

      localStorage.setItem('pcd_token', data.token);
      localStorage.setItem('pcd_user', JSON.stringify(data.user));
      onLoginSuccess(data.user, data.token);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Authentication failed. Check your ID and password.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPasswordSuccess = (newId: string, newPass: string) => {
    setEmail(newId);
    setPassword(newPass);
    setIsForgotPasswordOpen(false);
    setError(null);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
        <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
          {/* Modal Header */}
          <div className="bg-emerald-900 text-white p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <SchoolLogo size="sm" showText={false} />
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white">
                  School Portal Authentication
                </h2>
                <p className="text-xs text-emerald-200">
                  Peculiar College Doma • Secure Role-Based Access
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2.5 text-xs text-red-700">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  User ID (School Email or Admission Number)
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. PCD/2023/0084 or student@peculiarschools.edu.ng"
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Students may enter their assigned admission number (e.g. <span className="font-mono text-emerald-700 font-bold">PCD/2023/0084</span>)
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsForgotPasswordOpen(true)}
                    className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                  />
                </div>
                <div className="mt-1.5 p-2 bg-emerald-50 rounded-lg border border-emerald-100 flex items-center gap-1.5 text-[11px] text-emerald-900">
                  <HelpCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>
                    <strong>Student Notice:</strong> Your default password is your <strong>Parent's Phone Number</strong>.
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <span>Authenticating credentials...</span>
                ) : (
                  <>
                    <span>Sign In to Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Forgot Password OTP Modal */}
      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        onSuccessLoginPrefill={handleForgotPasswordSuccess}
        initialIdentifier={email}
      />
    </>
  );
};
